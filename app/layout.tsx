import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Invoice Late Payment Automator",
  description: "Automate late payment reminders and penalties for freelancers and small businesses."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="78cde885-02c2-4677-8f8c-fc685a3626b4"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
