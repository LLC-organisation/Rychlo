// @ts-ignore: CSS module side-effect import declaration
import "./globals.css";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { ChatbotWidget } from "@/components/chatbot-widget";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://akihlee.com";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Akihlee",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Akihlee gives SMEs an affordable ERP alternative: automated tax, accounting, and paperless workflows, real-time financial visibility, and AI agents that turn finance data into decisions that reduce losses.",
  foundingDate: "2024",
  sameAs: ["https://www.linkedin.com/company/akihlee/"],
  serviceType: [
    "Finance Automation",
    "Tax Automation",
    "Accounting Automation",
    "ERP for SMEs",
    "Financial Analytics",
  ],
};

export const metadata = {
  title: {
    default: "Akihlee",
    template: "%s | Akihlee",
  },
  icons: {
    icon: "/logo.png",
  },
  description:
    "Akihlee gives SMEs an affordable ERP alternative: automated tax, accounting, and paperless workflows, real-time financial visibility, and AI agents that turn finance data into decisions that reduce losses.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Akihlee | Finance Automation & Affordable ERP for SMEs",
    description:
      "Automated tax, accounting, and paperless workflows with real-time financial visibility and AI finance agents for growing businesses.",
    url: siteUrl,
    siteName: "Akihlee",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akihlee | Finance Automation & Affordable ERP for SMEs",
    description: "Automate finance. See where the money goes.",
  },
  keywords: [
    "Finance Automation",
    "Tax Automation",
    "Accounting Automation",
    "Affordable ERP",
    "ERP for SMEs",
    "Financial Visibility",
    "Tender Workflows",
    "AI Finance Agents",
    "Akihlee Technology",
    "East Africa Tech",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <ChatbotWidget />
        <Toaster theme="dark" position="bottom-right" richColors />

        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}

        {CLARITY_ID && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_ID}");
            `}
          </Script>
        )}
      </body>
    </html>
  );
}