import { Inter } from "next/font/google";
import "./globals.css";

import ThemeProvider from "@/components/themeProvider";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Essence Massage Studio London",
  description:
    "Professional massage therapy and wellness in Chiswick, London. Book aromatherapy, deep tissue, Swedish, sports, and pregnancy massages with certified therapists.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
