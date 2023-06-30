"use client";
import { User } from "@prisma/client";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

interface NavbarProps {
  currentUser: User | null;
}

const Navbar = ({ currentUser }: NavbarProps) => {
  return (
    <div className="fixed bg-white w-full z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex w-full justify-between items-center">
            <Logo />
            <div className="flex gap-3">
              <Search />
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
