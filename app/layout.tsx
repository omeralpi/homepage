import "@/styles/globals.css";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { Inter } from "@next/font/google";
import Script from "next/script";
import AnalyticsWrapper from "./analytics";

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  style: "normal",
  subsets: ["latin-ext"],
});

export default async function Layout({ children }) {
  return (
    <html lang="tr" className={`"scroll-smooth" ${inter.variable}`}>
      <body className="bg-white text-zinc-600 antialiased dark:bg-zinc-900 dark:text-zinc-400">
        <div className="flex min-h-screen flex-col pt-10 pb-14">
          <Header />
          <main className="mt-10 flex-grow sm:mt-20">{children}</main>
          <Footer />
        </div>

        <AnalyticsWrapper />
      </body>
      <script
        defer
        type="text/javascript"
        src="https://api.pirsch.io/pirsch-events.js"
        id="pirscheventsjs"
        data-code="R2S3uIng0RXC5q12ohmg4V3r9Jt94OyO"></script>
    </html>
  );
}
