import { describe, it, expect } from "vitest";
import { consultationSchema } from "./consultation";

const valid = {
  fullName: "Jane Smith",
  companyName: "Acme Corp",
  email: "jane@acme.com",
  phone: "+1 555 0100",
  message: "We spend 20 hours per week on manual data entry into our accounting system.",
};

describe("consultationSchema", () => {
  it("accepts a fully valid consultation request", () => {
    const result = consultationSchema.safeParse(valid);
    expect(result.success).toBe(true);
  });

  it("accepts a request without the optional message", () => {
    const { message: _message, ...withoutMessage } = valid;
    const result = consultationSchema.safeParse(withoutMessage);
    expect(result.success).toBe(true);
  });

  it("rejects when required fields are missing", () => {
    const result = consultationSchema.safeParse({});
    expect(result.success).toBe(false);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      expect(errors.fullName).toBeDefined();
      expect(errors.companyName).toBeDefined();
      expect(errors.email).toBeDefined();
      expect(errors.phone).toBeDefined();
    }
  });

  it("rejects a malformed email address", () => {
    const result = consultationSchema.safeParse({ ...valid, email: "not-an-email" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.email).toBeDefined();
    }
  });

  it("rejects empty strings for required text fields", () => {
    const result = consultationSchema.safeParse({
      ...valid,
      fullName: "",
      companyName: "",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      expect(errors.fullName).toBeDefined();
      expect(errors.companyName).toBeDefined();
    }
  });

  it("rejects a message longer than 2000 characters", () => {
    const result = consultationSchema.safeParse({ ...valid, message: "x".repeat(2001) });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.message).toBeDefined();
    }
  });

  it("strips HTML tags from the message", () => {
    const result = consultationSchema.safeParse({
      ...valid,
      message: "<script>alert(1)</script>Please automate our invoicing.",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.message).toBe("alert(1)Please automate our invoicing.");
    }
  });

  it("returns typed data on success", () => {
    const result = consultationSchema.safeParse(valid);
    if (result.success) {
      expect(result.data.email).toBe(valid.email);
      expect(result.data.fullName).toBe(valid.fullName);
    }
  });
});
