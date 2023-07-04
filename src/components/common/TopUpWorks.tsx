"use client";

import BTC from "@/assets/images/btcn.png";
import Number from "@/assets/images/number.png";
import Illustration from "@/assets/images/illst.png";
import Image from "next/image";

const TopUpWorks = () => {
  return (
    <div>
      <h3 className="text-[28px] font-semibold ">How does Top up work ?</h3>
      <div className="mt-9 grid grid-cols-1 md:grid-cols-3 gap-[70px] ">
        {data.map((item) => (
          <div className="" key={item.id}>
            <div className="w-full h-[200px] bg-purple flex items-center justify-center rounded-[8px] ">
              <Image src={item.image} alt="img" />
            </div>
            <h4 className="mt-[10px] font-bold text-[20px] " >{item.text}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TopUpWorks;

const data = [
  {
    id: 1,
    image: Number,
    text: "Enter Your Phone number or that of your loved one",
  },

  {
    id: 2,
    image: BTC,
    text: "Pay with your Preferred Crypto",
  },

  {
    id: 3,
    image: Illustration,
    text: "Once your payment is confirmed you would get your instant top up",
  },
];
