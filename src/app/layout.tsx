import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { CartProvider } from "@/context/cart-context";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The TV Home",
  description: "Everything You Need for Perfect Home Entertainment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jost.variable} font-jost bg-white`}>
        <CartProvider>
          <div id="Wrapper">
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
