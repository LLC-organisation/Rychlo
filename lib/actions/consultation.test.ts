// @vitest-environment node
import { describe, it, expect, vi, beforeEach } from "vitest";
import { submitConsultationRequest } from "./consultation";

vi.mock("@/lib/prisma", () => ({
  default: {
    consultationRequest: {
      create: vi.fn().mockResolvedValue({ id: "mock-id" }),
    },
  },
}));

vi.mock("@/lib/email", () => ({
  sendConsultationNotification: vi.fn().mockResolvedValue(undefined),
}));

const validFields = {
  fullName: "Jane Smith",
  companyName: "Tech Co",
  email: "jane@techco.com",
  phone: "+1 555 0200",
  message: "We spend too much time on repetitive data entry into our accounting system every day.",
};

function formDataFrom(fields: Record<string, string>): FormData {
  const fd = new FormData();
  for (const [key, value] of Object.entries(fields)) fd.append(key, value);
  return fd;
}

describe("submitConsultationRequest", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns success for a valid payload", async () => {
    const result = await submitConsultationRequest({}, formDataFrom(validFields));
    expect(result.success).toBe(true);
  });

  it("writes to the database when payload is valid", async () => {
    const { default: prisma } = await import("@/lib/prisma");
    await submitConsultationRequest({}, formDataFrom(validFields));
    expect(prisma.consultationRequest.create).toHaveBeenCalledOnce();
    expect(prisma.consultationRequest.create).toHaveBeenCalledWith({
      data: expect.objectContaining({ email: validFields.email }),
    });
  });

  it("sends an email notification when payload is valid", async () => {
    const { sendConsultationNotification } = await import("@/lib/email");
    await submitConsultationRequest({}, formDataFrom(validFields));
    expect(sendConsultationNotification).toHaveBeenCalledOnce();
  });

  it("returns fieldErrors for an invalid email and does not write to DB", async () => {
    const { default: prisma } = await import("@/lib/prisma");
    const result = await submitConsultationRequest(
      {},
      formDataFrom({ ...validFields, email: "not-an-email" })
    );
    expect(result.success).toBeFalsy();
    expect(result.fieldErrors?.email).toBeDefined();
    expect(prisma.consultationRequest.create).not.toHaveBeenCalled();
  });

  it("returns fieldErrors for empty required fields and does not send email", async () => {
    const { sendConsultationNotification } = await import("@/lib/email");
    const result = await submitConsultationRequest(
      {},
      formDataFrom({ ...validFields, fullName: "", companyName: "" })
    );
    expect(result.success).toBeFalsy();
    expect(result.fieldErrors?.fullName).toBeDefined();
    expect(result.fieldErrors?.companyName).toBeDefined();
    expect(sendConsultationNotification).not.toHaveBeenCalled();
  });
});
