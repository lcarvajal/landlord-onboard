import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/navigation";
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: "Landlord Onboard",
  description: "List shared flats to students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen w-screen justify-between">
        <Navbar />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
