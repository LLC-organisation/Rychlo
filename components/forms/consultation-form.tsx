"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2, CheckCircle } from "lucide-react";
import { consultationSchema, type ConsultationFormData } from "@/lib/schemas/consultation";
import { submitConsultationRequest } from "@/lib/actions/consultation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
  });

  const onSubmit = async (data: ConsultationFormData) => {
    const result = await submitConsultationRequest(data);
    if (result.success) {
      setSubmitted(true);
    } else if ("error" in result && result.error) {
      toast.error(result.error);
    } else {
      toast.error("Please check the form for errors and try again.");
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle className="text-blue-400 mb-4" size={56} />
        <h3 className="text-white text-2xl font-semibold mb-2">We'll be in touch!</h3>
        <p className="text-white/70 max-w-md">
          Thanks for reaching out. Our team will contact you within 1 business day to discuss your needs.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            placeholder="Jane Smith"
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            aria-invalid={!!errors.fullName}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p id="fullName-error" role="alert" className="text-sm text-red-400">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="companyName">Company Name *</Label>
          <Input
            id="companyName"
            placeholder="Acme Corp"
            aria-describedby={errors.companyName ? "companyName-error" : undefined}
            aria-invalid={!!errors.companyName}
            {...register("companyName")}
          />
          {errors.companyName && (
            <p id="companyName-error" role="alert" className="text-sm text-red-400">
              {errors.companyName.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            placeholder="jane@acme.com"
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="text-sm text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+254 700 000 000"
            aria-describedby={errors.phone ? "phone-error" : undefined}
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
          {errors.phone && (
            <p id="phone-error" role="alert" className="text-sm text-red-400">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" size={18} />
            Sending...
          </>
        ) : (
          "Book Free Consultation"
        )}
      </Button>
    </form>
  );
}
