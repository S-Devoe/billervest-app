"use client";

import { billervest, socialsList, supportList } from "@/constants/data";
import List from "./List";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1A1A1A] p-[50px]  ">
      <div className="flex gap-14 md:gap-4 flex-col md:flex-row justify-between items-center lg:items-start">
        <List title="Support" arr={supportList} />
        <List title="BillerVest Products Family" arr={billervest} />
        <div className="flex flex-col items-center md:items-start">
          <h5 className="font-work text-[24px] font-bold text-[#959595] tracking-[-2%] leading-[28.15px] ">
            Newsletter
          </h5>
          <input
            type="email"
            className="email-input border-[1px] border-[#fff] w-[350px] bg-[transparent] rounded-[10px] h-[50px] mt-[30px] "
            placeholder="Your Email"
          />

          <div className="mt-4">
            <h6 className="font-work text-[20px] font-[400] text-center ">
              Follow us
            </h6>
            <div className="flex justify-between gap-7 items-center mt-[29px] ">
              {socialsList.map((item) => (
                <Image
                  className="cursor-pointer"
                  src={item.image}
                  alt={item.title}
                  key={item.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
