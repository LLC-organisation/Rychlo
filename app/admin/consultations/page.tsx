import prisma from "@/lib/prisma";
import { Download } from "lucide-react";
import Link from "next/link";

export default async function ConsultationsPage() {
  const rows = await prisma.consultationRequest.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-white text-2xl font-semibold mb-1">Consultation Leads</h1>
          <p className="text-zinc-400">{rows.length} total</p>
        </div>
        <Link
          href="/admin/consultations/export"
          className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm px-4 py-2 rounded-md transition-colors"
        >
          <Download size={15} />
          Export CSV
        </Link>
      </div>

      {rows.length === 0 ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-12 text-center">
          <p className="text-zinc-400">No leads yet.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {rows.map((row) => (
            <div
              key={row.id}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex items-center justify-between gap-4"
            >
              <div>
                <p className="text-white font-medium">{row.fullName}</p>
                <p className="text-zinc-400 text-sm">{row.companyName}</p>
              </div>
              <div className="text-right">
                <p className="text-zinc-300 text-sm">{row.email}</p>
                <p className="text-zinc-400 text-sm">{row.phone}</p>
                <p className="text-zinc-500 text-xs mt-0.5">
                  {new Date(row.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
