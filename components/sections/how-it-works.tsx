"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Step {
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Tell us your pain points",
    description: "We start with a conversation about your finance operations: the manual paperwork, the reporting delays, and the places where costs and cash are hard to see.",
  },
  {
    number: 2,
    title: "We map your finance workflows",
    description: "Our team reviews how tax, accounting, approvals, and reporting work today, then identifies which processes to automate first for the fastest impact.",
  },
  {
    number: 3,
    title: "We design your ERP setup",
    description: "No templates. We configure a finance system around how your business actually runs, then walk you through it before anything goes live.",
  },
  {
    number: 4,
    title: "We build, connect, and go paperless",
    description: "Our engineers set up your automations, dashboards, and AI agents, connect them to your existing tools and data, and test everything before handover.",
  },
  {
    number: 5,
    title: "We stay with you after launch",
    description: "Once you're live, we monitor the system, refine reports and workflows, and adapt as your business changes. You're not on your own.",
  },
];

export function HowItWorksSection() {
  const handleScroll = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="how-it-works" className="py-24 bg-black">
      <div className="container flex flex-col gap-16">
        <motion.div
          className="flex flex-col items-center text-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white">How It Works</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
          <p className="text-white/70 max-w-xl text-base leading-relaxed">
            From the first call to a live finance system giving you full visibility. Here's what working with us actually looks like.
          </p>
        </motion.div>

        {/* Desktop: horizontal with connecting line */}
        <div className="hidden lg:flex items-start gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex items-start flex-1">
              <motion.div
                className="flex flex-col items-center text-center gap-4 flex-1 px-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className="relative flex items-center w-full justify-center">
                  {i > 0 && (
                    <div className="absolute right-1/2 top-1/2 -translate-y-1/2 w-1/2 h-px bg-blue-500/40" />
                  )}
                  {i < steps.length - 1 && (
                    <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-1/2 h-px bg-blue-500/40" />
                  )}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-white text-base font-semibold">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Mobile: vertical stack */}
        <div className="flex lg:hidden flex-col gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-4">
              <div className="flex flex-col items-center">
                <motion.div
                  className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shrink-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <span className="text-white font-bold">{step.number}</span>
                </motion.div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-blue-500/30 my-2" />
                )}
              </div>
              <motion.div
                className="flex flex-col gap-1 pb-8"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="text-white font-semibold">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-white/60 text-sm">Most clients have their first finance workflows automated within two weeks of the initial call.</p>
          <Button size="lg" onClick={handleScroll} className="gap-2">
            Book Your Free Call <ArrowRight size={16} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
