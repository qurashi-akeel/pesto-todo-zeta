import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components";
import NavMenubar from "@/components/nav/menu-bar";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Pesto Todo",
  description: "Fullstack Todo App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans",
          fontSans.variable
        )}
      >
        <section className="max-w-3xl p-10 mx-auto">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <NavMenubar />
            {children}
            <footer className="text-muted-foreground text-sm text-center">
              Build by Qurashi Akeel - {new Date().getFullYear()}
            </footer>
          </ThemeProvider>
        </section>
      </body>
    </html>
  );
}
