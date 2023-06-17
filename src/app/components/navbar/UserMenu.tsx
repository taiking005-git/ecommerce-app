"use client";
import { BsPersonCircle, BsCart3, BsFillCartFill } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { useCallback, useState } from "react";
import Button from "../Button";

const UserMenu = () => {
  const [activeItem, setActiveItem] = useState("");
  const toggleOpen = (value: string) => {
    if (activeItem === value) setActiveItem("");
    else setActiveItem(value);
  };
  return (
    <div className="flex gap-3 items-center ">
      <div className="relative">
        <Button
          title="Account"
          icon={BsPersonCircle}
          arrow={true}
          isActive={activeItem === "account"}
          isClick={() => toggleOpen("account")}
        />
        {activeItem === "account" ? (
          <div className="flex flex-col gap-2 absolute right-0 md:left-0 top-12 bg-white p-4 w-[15rem] rounded-md shadow-md">
            <Button title="Sign In" isClick={() => {}} primary={true} />
            <Button
              title="My Account"
              icon={BsPersonCircle}
              isClick={() => toggleOpen("")}
            />
            <Button
              isClick={() => toggleOpen}
              title="Orders"
              icon={BsFillCartFill}
            />
            <Button
              isClick={() => toggleOpen}
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
          isClick={() => toggleOpen("help")}
          icon={BiHelpCircle}
          arrow={true}
          isActive={activeItem === "help"}
        />
      </div>
      <div className="relative hidden md:block">
        <Button
          title="Cart"
          isClick={() => toggleOpen("cart")}
          icon={BsCart3}
          isActive={activeItem === "cart"}
        />
      </div>
    </div>
  );
};

export default UserMenu;
