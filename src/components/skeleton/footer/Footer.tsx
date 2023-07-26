"use client";

import { billervest, socialsList, supportList } from "@/constants/data";
import List from "./List";
import Image from "next/image";
import Logo from "@/assets/images/BP-Logo.png";
import TwitterIcon from "@/components/icons/TwitterIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import TelegramIcon from "@/components/icons/TelegramIcon";
import YoutubeIcon from "@/components/icons/YoutubeIcon";
import Container from "../container/Container";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="w-full bg-[#1A1A1A] py-8 md:py-16   ">
      <Container>
        <div className="flex gap-y-10 md:gap-4 justify-start flex-col md:flex-row md:justify-between  items-start">
          <div className="mt-4 md:mt-0 order-3 md:order-1 flex flex-col items-start  ">
            <div className="h-[2.8rem] w-[11rem] md:w-[12rem] relative object-contain  ">
              <Image src={Logo} alt="logo" priority sizes="100%" />
            </div>
            <p className="text-base text-left mt-[1.563rem] md:mt-[3.125rem] ">
              Copyright {date.getFullYear()} BillerPay{" "}
              <span className="md:block">@ All right reserved</span>{" "}
            </p>
            <div className="flex items-center gap-4 mt-[50px] ">
              {socials.map((item) => (
                <div
                  className="h-[3.75rem] w-[4.063rem] rounded-[0.86rem] bg-[#ffffff2a] flex items-center justify-center "
                  key={item.name}
                  title={item.name}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>

          <div className=" md:order-1  w-full md:w-fit flex flex-col items-start ">
            <p className="font-grotesk text-2xl ">Company</p>
            <div className="mt-[1.25rem] md:mt-[2.5rem] flex flex-col text-start gap-4  ">
              {company.map((item) => (
                <div className="text-base md:text-lg font-light " key={item.id}>
                  {item.title}
                </div>
              ))}
            </div>
          </div>

          <div className=" order-2 md:order-1 w-full md:w-fit flex flex-col items-start ">
            <p className="font-grotesk font-semibold text-2xl ">Privacy</p>
            <div className="mt-[1.25rem] md:mt-[2.5rem] text-start  flex flex-col gap-[15px] ">
              {privacy.map((item) => (
                <div className=" text-base md:text-lg font-light" key={item.id}>
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
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
