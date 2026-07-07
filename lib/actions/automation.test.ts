// @vitest-environment node
import { describe, it, expect, vi, beforeEach } from "vitest";
import { submitAutomationRequest } from "./automation";

vi.mock("@/lib/prisma", () => ({
  default: {
    automationRequest: {
      create: vi.fn().mockResolvedValue({ id: "mock-id" }),
    },
  },
}));

vi.mock("@/lib/email", () => ({
  sendAutomationRequestNotification: vi.fn().mockResolvedValue(undefined),
}));

const validFields = {
  fullName: "John Doe",
  companyName: "Logistics Plus",
  email: "john@logisticsplus.com",
  phone: "+1 555 0300",
  industry: "Logistics",
  existingSystems: "QuickBooks, Slack, Google Sheets, FedEx API",
  currentProcess:
    "Every morning, we manually export shipment data from FedEx and copy it into Google Sheets.",
  painPoints:
    "The process takes 90 minutes daily, is error-prone, and delays our morning stand-up.",
  desiredAutomation:
    "Automatically sync shipment data from FedEx into Google Sheets and QuickBooks at 7am daily.",
  estimatedMonthlyVolume: "~500 shipments/month",
};

function formDataFrom(fields: Record<string, string>): FormData {
  const fd = new FormData();
  for (const [key, value] of Object.entries(fields)) fd.append(key, value);
  return fd;
}

describe("submitAutomationRequest", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns success for a valid payload", async () => {
    const result = await submitAutomationRequest({}, formDataFrom(validFields));
    expect(result.success).toBe(true);
  });

  it("writes to the database when payload is valid", async () => {
    const { default: prisma } = await import("@/lib/prisma");
    await submitAutomationRequest({}, formDataFrom(validFields));
    expect(prisma.automationRequest.create).toHaveBeenCalledOnce();
    expect(prisma.automationRequest.create).toHaveBeenCalledWith({
      data: expect.objectContaining({ email: validFields.email }),
    });
  });

  it("sends an email notification when payload is valid", async () => {
    const { sendAutomationRequestNotification } = await import("@/lib/email");
    await submitAutomationRequest({}, formDataFrom(validFields));
    expect(sendAutomationRequestNotification).toHaveBeenCalledOnce();
  });

  it("returns fieldErrors for an invalid email and does not write to DB", async () => {
    const { default: prisma } = await import("@/lib/prisma");
    const result = await submitAutomationRequest(
      {},
      formDataFrom({ ...validFields, email: "bad-email" })
    );
    expect(result.success).toBeFalsy();
    expect(result.fieldErrors?.email).toBeDefined();
    expect(prisma.automationRequest.create).not.toHaveBeenCalled();
  });

  it("returns fieldErrors when currentProcess is too short", async () => {
    const result = await submitAutomationRequest(
      {},
      formDataFrom({ ...validFields, currentProcess: "Short" })
    );
    expect(result.success).toBeFalsy();
    expect(result.fieldErrors?.currentProcess).toBeDefined();
  });
});
