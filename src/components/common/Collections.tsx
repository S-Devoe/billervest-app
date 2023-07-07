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
    <section>
      <div className="flex justify-between items-end ">
        <h2 className="font-bold text-[40px] font-grotesk   ">{title}</h2>
      </div>
      <div className="mt-[60px] grid grid-cols-1 md:grid-cols-4 gap-[70px] ">
        {content.map((item, index) => (
          <div
            className={`rounded-[0.721rem] relative flex items-center justify-center bg-white h-[140px]  w-[270px]  `}
            key={item.id}
          >
            <Image
              src={item.image}
              alt="img"
              className=" rounded-[0.721rem] aspect-[3/2] object-contain  "
              sizes="100%"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Collections;
