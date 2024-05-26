import { Inter } from "next/font/google";
import "./globals.css";
import Header, { poppins } from "@/components/Header/page"
import GoogleAdsense from "@/components/GoogleAdsense";


export const metadata = {
  title: "ResumeArchive",
  description: "ResumeArchive is a web-based application designed to scan, store, and publicly share resumes (CVs).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <GoogleAdsense pId={"3022243059632861"} />
      <Header />
        {children}</body>
    </html>
  );
}
