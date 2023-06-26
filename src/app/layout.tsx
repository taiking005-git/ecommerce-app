import Footer from "./components/footer/Footer";
import Modal from "./components/modals/Modal";
import RegistarModal from "./components/modals/RegistarModal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";

const font = Poppins({ weight: "500", subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce",
  description: "The best market place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <RegistarModal />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
