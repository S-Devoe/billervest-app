"use client";

import { FooterListI } from "@/types";
import Image from "next/image";
import { FC } from "react";

interface Props {
  title: string;
  arr: FooterListI[];
  listGap?: string;
}

const List: FC<Props> = ({ title, arr, listGap = "gap-[22px]" }) => {
  return (
    <div className="flex flex-col items-center md:items-start gap-6 ">
      <h4 className="font-[300] text-[#959595] text-[20px] tracking-[-2%] leading-[23.44px] ">
        {title}
      </h4>
      <div
        className={`display items-center md:items-start flex flex-col ${listGap} `}
      >
        {arr.map((list: FooterListI, index: number) => (
          <div className="flex items-center gap-[14px] cursor-pointer " key={`list-${index}`}>
            <Image
              src={list.image}
              alt={list.title}
              className="h-[18px] w-[18px] "
            />
            <h6 className="font-[300] text-[15px] leading-[17.58px] tracking-[-2%]  ">
              {list.title}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};
export default List;
