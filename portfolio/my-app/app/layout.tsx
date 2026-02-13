import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Oleg Golev",
  description: "Oleg Golev - Princeton CS Graduate Student Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-MMWRV3J22Z`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MMWRV3J22Z', {
              send_page_view: true,
              page_path: window.location.pathname,
              custom_map: {
                'custom_parameter_1': 'scroll_depth',
                'custom_parameter_2': 'section_visible'
              }
            });
          `}
        </Script>
      </head>
      <body
        className={`${barlow.variable} font-sans antialiased bg-[#f9f9f9]`}
      >
        {children}
      </body>
    </html>
  );
}
