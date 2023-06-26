"use client";
import { BsPersonCircle, BsCart3, BsFillCartFill } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { useCallback, useState } from "react";
import Button from "../Button";
import useRegisterModal from "@/app/hooks/useRegisterModal";

const UserMenu = () => {
  const registarModal = useRegisterModal();
  const [activeItem, setActiveItem] = useState("");
  const toggleOpen = useCallback(
    (value: string) => {
      if (activeItem === value) setActiveItem("");
      else setActiveItem(value);
    },
    [activeItem]
  );

  return (
    <div className="flex gap-3 items-center ">
      <div className="relative">
        <Button
          title="Account"
          icon={BsPersonCircle}
          arrow={true}
          secondary={activeItem === "account"}
          onClick={() => toggleOpen("account")}
        />
        {activeItem === "account" ? (
          <div className="flex flex-col gap-2 absolute right-0 md:left-0 top-12 bg-white p-4 w-[15rem] rounded-md shadow-md">
            <Button
              title="Sign In"
              onClick={registarModal.onOpen}
              primary={true}
            />
            <Button
              title="My Account"
              icon={BsPersonCircle}
              onClick={() => toggleOpen("")}
            />
            <Button
              onClick={() => toggleOpen}
              title="Orders"
              icon={BsFillCartFill}
            />
            <Button
              onClick={() => toggleOpen}
              title="Saved Items"
              icon={BsPersonCircle}
            />
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
