import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/layout/header";
import Footer from "./components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Audemars Piguet | Swiss Luxury Watches",
  description: "It is in the heart of the vallée de Joux, Switzerland, that everything started for Audemars Piguet in 1875. Born in Le Brassus, raised around the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><NavBar />{children}<Footer/></body>
    </html>
  );
}
