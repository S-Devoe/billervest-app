"use client";

import { FaqI } from "@/types";
import { FC, useState } from "react";
import ArrowDown from "../icons/ArrowDown";

interface Props {
  data: FaqI[];
}

const FAQ: FC<Props> = ({ data }) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggle = (id: number): void => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  };

  return (
    <section className="w-full lg:w-[1000px] flex flex-col gap-8 ">
      {data.map((item) => (
        <div className=" w-full " key={item.id}>
          <div
            onClick={() => toggle(item.id)}
            className="flex items-center justify-between p-5 cursor-pointer rounded-[6px] border-[1.5px] border-purple h-[60px] "
          >
            <span className="text-[20px] "> {item.title}</span>
            <span
              className={`${activeId === item.id && "rotate-180 transition-all "} `}
            >
              <ArrowDown />
            </span>
          </div>
          {activeId === item.id && <div className="my-8 px-5  ">{item.content}</div>}
        </div>
      ))}
    </section>
  );
};
export default FAQ;
