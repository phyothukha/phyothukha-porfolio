import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/style/globals.css";
import { ThemeProvider } from "@/components/Theme-provider";
// import { ThemeProvider } from "next-themes";
// import { ThemeProvider } from "@/components/Theme-provider";

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
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
