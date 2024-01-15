'use client'
import { TaskProviderContext } from "@/context/TaskProvider";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TaskProviderContext>
          {children}
          <ToastContainer />
        </TaskProviderContext>
      </body>
    </html>
  );
}
