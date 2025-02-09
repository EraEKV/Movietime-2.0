import type { Metadata } from "next";
import "./globals.css";
// import Navbar from "@/widgets/Navbar";
// import Footer from "@/widgets/Footer";

export const metadata: Metadata = {
  title: "Movietime",
  description: "Movietime 2.0",
};

<link
  rel="icon"
  href="/icon?<generated>"
  type="image/<generated>"
  sizes="<generated>"
/>

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
