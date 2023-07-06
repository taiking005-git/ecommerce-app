"use client";

import { UsersProps } from "../../../types";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = ({ currentUser }: UsersProps) => {
  return (
    <nav className="fixed bg-white w-full z-10 shadow-sm">
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
    </nav>
  );
};

export default Navbar;
