import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link className=" font-semibold  my-2 text-xl lg:text-2xl  flex gap-2" href={"/"}>
      <h1 className="  text-rose-500">G<span className="hidden lg:inline">aming</span></h1>
      <span className="hidden lg:inline">Boi</span>
    </Link>
  );
};

export default Logo;
