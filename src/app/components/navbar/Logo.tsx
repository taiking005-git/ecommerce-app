"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    // <Image
    //   className="hidden md:block cursor-pointer "
    //   alt="logo"
    //   height={50}
    //   width={50}
    //   src="/"
    // />
    <h1>Logo</h1>
  );
};

export default Logo;
