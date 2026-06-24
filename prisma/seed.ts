import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Upsert the singleton SiteSettings row
  await prisma.siteSettings.upsert({
    where: { id: "singleton" },
    update: {
      linkedin: "https://www.linkedin.com/company/akihlee/",
    },
    create: {
      id: "singleton",
      email: "hello@biashara-automation.com",
      whatsapp: "https://wa.me/15550001234",
      telegram: "https://t.me/biashara_auto",
      linkedin: "https://www.linkedin.com/company/akihlee/",
      instagram: "https://instagram.com/biashara_automation",
      twitter: "https://x.com/biashara_auto",
    },
  });

  // Seed mock case studies
  const caseStudies = [
    {
      clientProblem:
        "Humboldt University's research department maintained a website packed with dozens of links to academic resources, tools, and databases. Users frequently struggled to locate the specific resource they needed, leading to \"click rage\" (repeated frustrated clicking through menus) and significant wasted time.",
      solution:
        "We developed an AI-powered chatbot system hosted on AWS that understands natural language queries and instantly surfaces the most relevant resource links. Users simply describe what they're looking for and the bot returns a direct, accurate link with no more hunting through pages of menus.",
      results:
        "Time spent searching for resources dropped dramatically. Click rage incidents were effectively eliminated. Research staff reported faster access to tools and noticeably higher satisfaction with the department portal.",
      industry: "Education",
      companySize: "1000+",
      published: true,
    },
    {
      clientProblem:
        "A growing business had no dedicated online presence beyond a generic social media profile. Without a professional website, potential customers couldn't easily find them or understand their services, directly limiting their reach and sales opportunities.",
      solution:
        "We designed and built a custom, mobile-friendly landing page with clear messaging, strong calls-to-action, and foundational SEO to attract and convert visitors. The page showcased their services, built credibility, and made it effortless for customers to get in touch.",
      results:
        "Increased visibility in local search results within weeks of launch, a steady stream of new inbound inquiries, and measurable growth in sales, turning their online presence into a genuine revenue channel.",
      industry: "Small Business",
      companySize: "1-10",
      published: true,
    },
    {
      clientProblem:
        "A regional accounting firm was spending 30+ hours per week manually entering invoice data from PDF documents into their accounting software. Errors were frequent, causing delays in client billing.",
      solution:
        "We deployed an intelligent document processing pipeline that automatically extracts invoice data from PDFs, validates it against predefined rules, and pushes it directly into their accounting software via API integration.",
      results:
        "Invoice processing time reduced from 30 hours/week to under 2 hours. Error rate dropped by 94%. The team redirected 28 hours/week to higher-value client advisory work.",
      industry: "Accounting",
      companySize: "11-50",
      published: true,
    },
  ];

  for (const caseStudy of caseStudies) {
    await prisma.caseStudy.create({ data: caseStudy });
  }

  console.log("Seed completed successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
