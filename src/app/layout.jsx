import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Creative Thoughts",
    template: "%s | Creative Thoughts",
  },
  description: "A beautiful modern website for a creative thoughts agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col justify-between min-h-screen container mx-auto px-5 lg:px-10 xl:px-20">
          <Navbar />
          <section className="flex-grow">{children}</section>
          <Footer />
        </main>
      </body>
    </html>
  );
}
