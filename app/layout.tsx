import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jayashivesh | Full Stack Python Developer",
  description: "Portfolio of jayshivesh, a Full Stack Python Developer specializing in Django and cloud deployment.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
