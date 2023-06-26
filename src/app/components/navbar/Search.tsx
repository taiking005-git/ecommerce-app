"use client";
import { BiSearchAlt2 } from "react-icons/bi";
import Button from "../Button";
import Input from "../input/Input";

const Search = () => {
  return (
    <div className="hidden md:block items-center w-[26rem]">
      <form action="" className="flex gap-2 text-sm">
        <div className="border-2 flex-grow border-gray-300 rounded-md p-2 gap-2 flex items-center w-[50%]">
          <BiSearchAlt2 size={24} />
          {/* <input
            className="focus:outline-none w-full"
            placeholder="Search products, brands and categories"
          /> */}
          <Input
            id="search"
            label="Search"
            required
            placeholder="Search products, brands and categories"
          />
        </div>

        <Button title="SEARCH" primary onClick={() => {}} />
      </form>
    </div>
  );
};

export default Search;
