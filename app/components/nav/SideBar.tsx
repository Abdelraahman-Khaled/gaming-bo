"use client";
import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import NavLink from "./NavLink";
import Logo from "../defaults/Logo";
import { useGetUser } from "@/lib/queryFunctions";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { logout } from "@/app/actions/auth";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

export const NAV_LINKS = [
  {
    link: "/",
    label: "Home",
    icon: <GoHomeFill />,
  },
  {
    link: "/category",
    label: "Category",
    icon: <MdDashboard />,
  },
  {
    link: "/games",
    label: "Games",
    icon: <MdDashboard />,
  },
  {
    link: "/wishlist",
    label: "WIshlist",
    icon: <FaHeart />,
  },
  // {
  //   link: "/friends",
  //   label: "Friends",
  //   icon: <BsFillPeopleFill />,
  // },
];

const SideBar = () => {
  const { user, isLoading } = useGetUser();
  const queryClient = useQueryClient();
  return (
    <div className=" col-span-1 lg:col-span-2">
      <div className=" py-5 px-2 lg:px-10 h-screen sticky inset-0 flex flex-col items-center lg:items-start bg-black/30 text-gray-50">
        <div className="mb-4 lg:mb-0">
          <Logo />
        </div>
        {NAV_LINKS.map((navLink, i: number) => (
          <NavLink key={i} navLink={navLink} />
        ))}
        {isLoading ? (
          <div className="mt-auto hidden lg:block">
            <Skeleton className="h-4 w-[130px]" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
        ) : user?.data ? (
          <div className="mt-auto w-full">
            <NavLink
              navLink={{
                link: "/settings",
                label: "Settings",
                icon: <Settings />,
              }}
            />
            <Button
              onClick={async () => {
                const res = await logout();
                if (res.success) {
                  toast.success(res.success);
                  queryClient.invalidateQueries({ queryKey: ["user"] });
                } else toast.error(res.error);
              }}
              variant={"destructive"}
              className="w-full lg:w-auto"
            >
              <span className="hidden lg:inline">Logout</span>
              <span className="lg:hidden">⏻</span>
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SideBar;
