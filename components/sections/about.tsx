"use client";

import { motion } from "motion/react";
import {
  Lightbulb,
  ShieldCheck,
  Users,
  Handshake,
  Leaf,
  Lock,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  index: number;
}

function ValueCard({ icon: Icon, title, index }: ValueCardProps) {
  return (
    <motion.div
      className={cn(
        "bg-zinc-900 border border-zinc-800 rounded-lg p-5",
        "hover:border-blue-500/50 transition-all duration-300 flex flex-col items-center gap-3 text-center"
      )}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
        <Icon size={18} className="text-white" />
      </div>
      <span className="text-white font-medium text-sm">{title}</span>
    </motion.div>
  );
}

const values: Omit<ValueCardProps, "index">[] = [
  { icon: Lightbulb, title: "Innovation" },
  { icon: ShieldCheck, title: "Integrity" },
  { icon: Users, title: "Customer Focus" },
  { icon: Handshake, title: "Collaboration" },
  { icon: Leaf, title: "Sustainability" },
  { icon: Lock, title: "Security First" },
];

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  initials: string;
  index: number;
}

function TeamCard({ name, role, bio, initials, index }: TeamCardProps) {
  return (
    <motion.div
      className={cn(
        "bg-zinc-900 border border-zinc-800 rounded-lg p-6",
        "hover:border-blue-500/50 transition-all duration-300 flex flex-col gap-4"
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
        <span className="text-white font-bold text-xl">{initials}</span>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-white font-semibold text-lg">{name}</h3>
        <p className="text-blue-400 text-sm font-medium">{role}</p>
      </div>
      <p className="text-white/60 text-sm leading-relaxed">{bio}</p>
    </motion.div>
  );
}

const team: Omit<TeamCardProps, "index">[] = [
  {
    name: "Victor Kamiri",
    role: "Co-Founder · UI/UX Engineer & Marketing Lead",
    initials: "VK",
    bio: "Victor crafts the user experiences behind our products — intuitive interfaces that make powerful technology feel effortless. He leads design strategy and drives growth through targeted marketing.",
  },
  {
    name: "Lee Haney",
    role: "Co-Founder · Tech & AI Lead",
    initials: "LH",
    bio: "Lee architects the core of our automation platform, building robust AI systems and scalable integrations. He leads technical strategy and ensures every solution is engineered for performance and reliability.",
  },
  {
    name: "George Akai",
    role: "Co-Founder · Cybersecurity Lead & AI Architect",
    initials: "GA",
    bio: "George ensures every system we build is secure by design. He leads our cybersecurity practice and architects AI solutions that protect client data while unlocking the full power of intelligent automation.",
  },
];

export function AboutSection() {
  const handleScroll = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-24 bg-black">
      <div className="container flex flex-col gap-20">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 flex flex-col gap-4 hover:border-blue-500/50 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full" />
              <h3 className="text-blue-400 font-semibold text-lg uppercase tracking-wide">Our Mission</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              To empower organizations by removing the burden of repetitive work,
              freeing their people to focus on what only humans can do — build
              relationships, solve complex problems, and drive growth.
            </p>
          </motion.div>

          <motion.div
            className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 flex flex-col gap-4 hover:border-blue-500/50 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full" />
              <h3 className="text-blue-400 font-semibold text-lg uppercase tracking-wide">Our Vision</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              To become the most trusted technology partner for growing businesses
              in East Africa and beyond — delivering AI, automation, and security
              that actually works.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="flex flex-col gap-8">
          <motion.div
            className="flex flex-col items-center text-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white">Our Values</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {values.map((value, i) => (
              <ValueCard key={value.title} {...value} index={i} />
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="flex flex-col gap-8">
          <motion.div
            className="flex flex-col items-center text-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white">Meet the Founders</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <TeamCard key={member.name} {...member} index={i} />
            ))}
          </div>
        </div>

        {/* Company Story + CTA */}
        <motion.div
          className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 md:p-12 flex flex-col gap-6 hover:border-blue-500/50 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full" />
            <h3 className="text-blue-400 font-semibold text-lg uppercase tracking-wide">Our Story</h3>
          </div>
          <p className="text-white/80 leading-relaxed text-base max-w-3xl">
            Amek Technology Solutions was founded by three technologists who saw businesses
            drowning in repetitive work and security gaps that software could solve.
            We built the company to bridge the gap between enterprise-grade technology
            and the businesses that need it most — combining AI, automation, and
            cybersecurity under one roof.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
            <Button size="lg" onClick={handleScroll} className="gap-2">
              Work With Our Team <ArrowRight size={16} />
            </Button>
            <span className="text-white/40 text-sm">No commitment. Free first consultation.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
