import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { sendConsultationNotification } from "@/lib/email";
import { consultationSchema } from "@/lib/schemas/consultation";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = consultationSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    await prisma.consultationRequest.create({ data: parsed.data });
    await sendConsultationNotification(parsed.data);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
