import Footer from "../components/footer/Footer";
import RegistarModal from "../components/modals/RegistarModal";
import Navbar from "../components/navbar/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import ToasterProvider from "../providers/ToasterProvider";
import LoginModal from "../components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";

const font = Poppins({ weight: "500", subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce",
  description: "The best market place",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <Navbar currentUser={currentUser} />
        <LoginModal />
        <RegistarModal />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
