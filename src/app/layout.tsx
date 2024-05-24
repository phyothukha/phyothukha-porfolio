import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/style/globals.css";
import { ThemeProvider } from "@/components/Theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phyo Thu Kha",
  description: "Full stack Developer",
  icons: {
    icon: [{ url: "/phyothukha.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={"dark" ?? "light"}
      style={{ colorScheme: "dark" ?? "light" }}
    >
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
