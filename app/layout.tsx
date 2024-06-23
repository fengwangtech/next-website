import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export const metadata: Metadata = {
  title: "Feng Wang's website",
  description: "Feng Wang's website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>  
        <Header />
        <div style={{ minHeight: '400px'}}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
