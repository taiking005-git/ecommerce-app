"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const Logo = () => {
  const router = useRouter();
  const notify = () => {
    toast.success("Welcome");
  };
  return (
    // <Image
    //   className="hidden md:block cursor-pointer "
    //   alt="logo"
    //   height={50}
    //   width={50}
    //   src="/"
    // />
    <h1 onClick={notify}>Logo</h1>
  );
};

export default Logo;
