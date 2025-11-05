import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sample",
  description: "sample, mysql, blog",
  icons: {
    icon: "/images/logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
