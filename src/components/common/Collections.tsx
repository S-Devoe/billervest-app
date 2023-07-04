"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  title: string;
  content: Array<{ id: number; image: StaticImageData }>;
  link: string;
}

const Collections: FC<Props> = ({
  title = "test1",
  content,
  link = "test4",
}) => {
  return (
    <section>
      <div className="flex justify-between items-end ">
        <h2 className="font-bold text-[40px]  ">{title}</h2>
        <Link className="ont-bold text-[20px]  " href={link}>
          See all
        </Link>
      </div>
      <div className="mt-[60px] flex items-center justify-between gap-[60px] ">
        {content.map((item, index) => (
          <div className="relative h-[250px] w-[260px]  bg-white  " key={index}>
            <Image src={item.image} alt="img" fill  />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Collections;
