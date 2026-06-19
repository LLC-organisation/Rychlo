import { z } from "zod";
import { contactBaseSchema } from "./contact-base";

const stripHtml = (s: string) => s.replace(/<[^>]*>/g, "").trim();

export const consultationSchema = contactBaseSchema.extend({
  message: z
    .string()
    .max(2000, "Message must be under 2000 characters")
    .optional()
    .transform((v) => (v ? stripHtml(v) : v)),
});

export type ConsultationFormData = z.infer<typeof consultationSchema>;
