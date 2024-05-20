import "./globals.css";
import Nav from "../components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arthur Beckett",
  description:
    "Arthur Beckett is an experienced frontend developer with 3+ years of experience in building websites and web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <div className="fixed top-0 left-0 right-0 z-10">
          <Nav />
        </div>
        <main className="flex-grow">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
