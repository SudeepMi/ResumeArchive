import { Inter } from "next/font/google";
import "./globals.css";
import Header, { poppins } from "@/components/Header/page"


export const metadata = {
  title: "ResumeArchive",
  description: "ResumeArchive is a web-based application designed to scan, store, and publicly share resumes (CVs).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Header />
        {children}</body>
    </html>
  );
}
