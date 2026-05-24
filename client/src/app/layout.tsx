import type { Metadata } from "next";

import "./globals.css";

import { QueryProvider } from "@/src/components/providers/query-provider";

export const metadata: Metadata = {
  title: "Loan Risk System",
  description: "Loan prediction platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}