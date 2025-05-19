// Next
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

// Local
import "./globals.css";

// Fonts
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pedrito Market",
  description: "Pedrito Market is a Lens-based prediction market agent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
