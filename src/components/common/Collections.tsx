"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";
import Button from "../form/Buttons/Button";

interface Props {
  title: string;
  content: Array<{ id: number; image: StaticImageData }>;
  // link: string;
}

const Collections: FC<Props> = ({ title, content }) => {
  return (
    <section className="w-full  ">
      <div className="flex justify-between items-end ">
        <h2 className="font-bold text-2xl lg:text-4xl font-grotesk   ">
          {title}
        </h2>
      </div>
      <div className="mt-[30px] md:mt-[60px] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-[25px] lg:gap-[70px] ">
        {content.map((item) => (
          <Link
            href={`/products/utilities/${item.id}`}
            className={`rounded-[0.721rem] relative flex items-center justify-center bg-white h-full w-full md:h-[8.813rem]   `}
            key={item.id}
          >
            <Image
              src={item.image}
              alt="img"
              className="rounded-[8px] md:rounded-[0.721rem] w-[80%] h-[80%] aspect-[3/2] object-contain  "
              sizes="100%"
            />
          </Link>
        ))}
      </div>
      <div className=" flex justify-start mt-9 md:mt-[9.063rem] ">
        <Button
          btnTitle="Load More"
          borderRadius="rounded-[8px] md:rounded-full"
          width="w-full md:w-[200px]"
          textStyle="font-semibold"
        />
      </div>
    </section>
  );
};
export default Collections;
