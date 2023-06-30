"use client";
import {
  BsPersonCircle,
  BsCart3,
  BsFillCartFill,
  BsFillHeartFill,
  BsPersonFillCheck,
} from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { useCallback, useState } from "react";
import Button from "../Button";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";

interface UserMenuProps {
  currentUser: User | null;
}

const UserMenu = ({ currentUser }: UserMenuProps) => {
  const registarModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [activeItem, setActiveItem] = useState("");
  const toggleOpen = useCallback(
    (value: string) => {
      if (activeItem === value) setActiveItem("");
      else setActiveItem(value);
    },
    [activeItem]
  );

  const handleSignIn = () => {
    loginModal.onOpen();
    toggleOpen("");
  };

  return (
    <div className="flex gap-3 items-center ">
      <div className="relative">
        <Button
          title={`${currentUser ? "Hi, " + currentUser.name : "Account"}`}
          icon={currentUser ? BsPersonFillCheck : BsPersonCircle}
          arrow={true}
          secondary={activeItem === "account"}
          onClick={() => toggleOpen("account")}
        />
        {activeItem === "account" ? (
          <div className="flex flex-col gap-2 absolute right-0 md:left-0 top-12 bg-white p-4 w-[15rem] rounded-md shadow-md">
            {!currentUser && (
              <Button title="Sign In" onClick={handleSignIn} primary />
            )}
            <Button
              title="My Account"
              icon={BsPersonCircle}
              onClick={() => toggleOpen("")}
            />
            <Button
              onClick={() => toggleOpen("")}
              title="Orders"
              icon={BsFillCartFill}
            />
            <Button
              onClick={() => toggleOpen("")}
              title="Saved Items"
              icon={BsFillHeartFill}
            />
            {currentUser && (
              <Button title="Log Out" onClick={() => signOut()} primary />
            )}{" "}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="relative hidden md:block">
        <Button
          title="Help"
          onClick={() => toggleOpen("help")}
          icon={BiHelpCircle}
          arrow={true}
          secondary={activeItem === "help"}
        />
      </div>
      <div className="relative hidden md:block">
        <Button
          title="Cart"
          onClick={() => toggleOpen("cart")}
          icon={BsCart3}
          secondary={activeItem === "cart"}
        />
      </div>
    </div>
  );
};

export default UserMenu;
