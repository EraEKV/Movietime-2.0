import type { Metadata } from "next";
import "./globals.css";
import { AppSettingsProvider } from "@/app/_providers/AppSettingsProvider";
import Navbar from "@/widgets/Navbar";
// import Footer from "@/widgets/Footer";

export const metadata: Metadata = {
  title: "Movietime",
  description: "Movietime 2.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body>
        <AppSettingsProvider>
        <Navbar />
          {children}
        {/* <Footer /> */}
        </AppSettingsProvider>
      </body>
    </html>
  );
}
