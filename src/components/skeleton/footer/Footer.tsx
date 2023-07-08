"use client";

import { billervest, socialsList, supportList } from "@/constants/data";
import List from "./List";
import Image from "next/image";
import Logo from "@/assets/images/BP-Logo.png";
import TwitterIcon from "@/components/icons/TwitterIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import TelegramIcon from "@/components/icons/TelegramIcon";
import YoutubeIcon from "@/components/icons/YoutubeIcon";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="w-full bg-[#1A1A1A] p-8 md:p-[50px]  ">
      <div className="flex gap-14 md:gap-4 flex-col md:flex-row justify-between items-center lg:items-start">
        <div className="mt-4 md:mt-0 order-3 md:order-1 flex flex-col items-center md:items-start ">
          <div className="h-[45px] w-[180px] md:w-[200px] relative object-contain  ">
            <Image src={Logo} alt="logo" priority fill sizes="100%" />
          </div>
          <p className="text-[20px] mt-[25px] md:mt-[50px] ">
            Copyright {date.getFullYear()} BillerPay{" "}
            <span className="block">@ All right reserved</span>{" "}
          </p>
          <div className="flex items-center gap-4 mt-[50px] ">
            {socials.map((item) => (
              <div
                className="h-[60px] w-[65px] rounded-[0.86rem] bg-[#ffffff2a] flex items-center justify-center "
                key={item.name}
                title={item.name}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>

        <div className=" order-1  flex flex-col items-center md:items-start ">
          <p className="font-grotesk text-[25px] ">Company</p>
          <div className="mt-[20px] md:mt-[40px] flex flex-col text-center md:text-start gap-[15px]  ">
            {company.map((item) => (
              <div className="text-[18px]  " key={item.id}>
                {item.title}
              </div>
            ))}
          </div>
        </div>

        <div className=" order-2 md:order-1 flex flex-col items-center md:items-start ">
          <p className="font-grotesk text-[25px] ">Privacy</p>
          <div className="mt-[20px] md:mt-[40px] text-center md:text-start  flex flex-col gap-[15px] ">
            {privacy.map((item) => (
              <div className=" text-[18px]  " key={item.id}>
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

const socials = [
  {
    name: "Twitter",
    icon: <TwitterIcon />,
  },
  {
    name: "Facebook",
    icon: <FacebookIcon />,
  },
  {
    name: "Telegram",
    icon: <TelegramIcon />,
  },
  {
    name: "Youtube",
    icon: <YoutubeIcon />,
  },
];

const company = [
  {
    id: 0,
    title: "Product",
  },
  {
    id: 1,
    title: "About Us",
  },
  {
    id: 2,
    title: "Partners",
  },
  {
    id: 3,
    title: "News",
  },
];

const privacy = [
  {
    id: 0,
    title: "Development Agreement",
  },
  {
    id: 1,
    title: "Technology Policy",
  },
  {
    id: 2,
    title: "User Policy",
  },
];
