"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  title: string;
  content: Array<{ id: number; image: StaticImageData }>;
  // link: string;
}

const Collections: FC<Props> = ({ title, content }) => {
  return (
    <section className="" >
      <div className="flex justify-between items-end ">
        <h2 className="font-bold text-[25px] md:text-[40px] font-grotesk   ">{title}</h2>
      </div>
      <div className="mt-[30px] md:mt-[60px] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-[25px] lg:gap-[70px] ">
        {content.map((item) => (
          <div
            className={`rounded-[0.721rem] relative flex items-center justify-center bg-white h-full w-full md:h-[140px]   `}
            key={item.id}
          >
            <Image
              src={item.image}
              alt="img"
              className="rounded-[8px] md:rounded-[0.721rem] w-[80%] h-[80%] aspect-[3/2] object-contain  "
              sizes="100%"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Collections;
