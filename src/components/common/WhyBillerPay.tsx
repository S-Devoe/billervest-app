import { whyBillerPay } from "@/constants/data";
import { IconI } from "@/types";
import Link from "next/link";
import LongArrowRightIcon from "../icons/LongArrowRIghtIcon";

export const WhyBillerPay = () => {
  return (
    <div className="">
      <div className="text-center mb-12">
        <h2 className="font-grotesk text-3xl mb-2 md:text-[2.875rem] font-bold ">
          <span className="text-[#FEA106]">Why Billerpay</span> Business?
        </h2>
      </div>
      <div className="flex justify-center items-center gap-y-8 md:gap-y-0 md:gap-x-12 flex-col md:flex-row ">
        {whyBillerPay.map((item) => (
          <WhyBillerPayCard {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

type WhyBillerPayCardProps = {
  title: string;
  body: string;
  path: string;
  icon: (props: IconI) => JSX.Element;
};

function WhyBillerPayCard({
  title,
  body,
  path,
  icon: Icon,
}: WhyBillerPayCardProps) {
  return (
    <div className="w-full md:w-[21.438rem] h-[21.688rem] rounded-[2.125rem] bg-[#2A2B31] flex justify-center items-center flex-col gap-y-6 p-4">
      <div className="w-[6.625rem] h-[6.625rem] rounded-full bg-[#FEA106] flex justify-center items-center">
        <Icon scale={0.8} />
      </div>
      <div className="text-center flex flex-col gap-y-2">
        <h4 className="font-grotesk text-2xl">{title}</h4>
        <p className=" text-[#808080] mb-2 ">{body}</p>
        <Link href={path} className="flex gap-x-2 justify-center items-center">
          <span className="font-grotesk text-[#FEA106] text-lg">
            Learn More
          </span>
          <span>
            <LongArrowRightIcon />
          </span>
        </Link>
      </div>
    </div>
  );
}
