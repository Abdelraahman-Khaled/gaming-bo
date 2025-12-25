import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import MotionItem from "./defaults/MotionItem";
const CardInfo = ({
  desc,
  title,
  image,
  textBtn,
  btnClasses,
}: {
  desc: string;
  title: string;
  image: string;
  textBtn?: string;
  btnClasses?: string;
}) => {
  console.log(desc);
  return (
    <MotionItem
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      className=" flex flex-col items-start absolute left-3 sm:left-6 md:left-10 lg:left-20 top-3 sm:top-6 md:top-10 lg:top-20 max-w-[85%] sm:max-w-xs md:max-w-sm lg:max-w-md"
    >
      <div className=" w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 h-12 sm:h-20 md:h-28 lg:h-36 xl:h-40 relative">
        <Image src={image} fill alt={`${title}`} className=" object-contain" />
      </div>
      <h1 className=" text-white text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold mt-1 md:mt-2">{title}</h1>
      <p className=" text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-200 line-clamp-2 sm:line-clamp-3 mt-1">{desc}</p>
      <Button className={`rounded-full mt-2 sm:mt-3 md:mt-4 lg:mt-5 text-[10px] sm:text-xs md:text-sm lg:text-base px-3 sm:px-4 md:px-6 py-1 sm:py-2 ${btnClasses || " text-gray-50"}`}>
        {textBtn || "Find out more !"}
      </Button>
    </MotionItem>
  );
};

export default CardInfo;
