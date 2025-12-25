"use client";
import React from "react";
import Search from "../Search";
import ButtonGame from "../defaults/ButtonGame";
import { useGetUser } from "@/lib/queryFunctions";
import User from "../User";
import SkeletonCustom from "../SkeletonCustom";

const NavBar = () => {
  const { user, isLoading } = useGetUser();
  return (
    <nav>
      <header className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 mb-4 md:mb-0">
        <Search />
        {isLoading ? (
          <SkeletonCustom circle />
        ) : user?.data ? (
          <User user={user.data} />
        ) : (
          <div className=" flex items-center gap-2">
            <ButtonGame link="/login" text="Login" />
            <ButtonGame link="/signup" text="Sign up" />
          </div>
        )}
      </header>
    </nav>
  );
};

export default NavBar;
