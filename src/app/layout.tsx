import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/style/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phyo Thu Kha",
  description: "Full stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
