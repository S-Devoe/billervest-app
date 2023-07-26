"use client";

import { businessServices } from "@/constants/data";
import Container from "../skeleton/container/Container";
import { IconI } from "@/types";
import { useRouter } from "next/navigation";

export const BusinessServices = () => {
  return (
    <Container>
      <div className="md:py-[5.625rem]  py-8">
        <div className="text-center mb-12">
          <h2 className="font-grotesk text-3xl  md:text-[2.875rem] font-bold text-[#FEA106]">
            What We Offer
          </h2>
        </div>
        <div className="flex flex-col gap-y-20 items-center">
          {businessServices.map((item) => (
            <BusinessServiceItem {...item} key={item.id} />
          ))}
        </div>
      </div>
    </Container>
  );
};

type BusinessServiceItemProps = {
  title: string;
  body: string;
  icon: (props: IconI) => JSX.Element;
  path: string;
};

function BusinessServiceItem({
  title,
  body,
  path,
  icon: Icon,
}: BusinessServiceItemProps) {
  const router = useRouter();

  return (
    <div className="w-full md:w-[60%] flex flex-col gap-y-6">
      <div className="flex gap-x-6  items-center">
        <div className="bg-[#7049F7] rounded p-3">
          <Icon scale={0.5} />
        </div>
        <h3 className="font-grotesk text-xl md:text-3xl">{title}</h3>
      </div>
      <div className="">
        <p className="text-[#808080] text-base md:text-xl">{body}</p>
      </div>
      <div className="">
        <button
          className="bg-[#7049F7] rounded-full font-grotesk py-4 px-16 text-white font-semibold"
          onClick={() => router.push(path)}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
