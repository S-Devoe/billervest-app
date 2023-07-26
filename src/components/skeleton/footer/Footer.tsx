"use client";

import { billervest, socialsList, supportList } from "@/constants/data";
import List from "./List";
import Image from "next/image";
import Logo from "@/assets/images/BP-Logo.png";
import Container from "../container/Container";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";

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
            <p className="text-base text-left mt-[1.563rem] md:mt-[3.125rem] text-[#F5F2EA]  text-opacity-60">
              Copyright {date.getFullYear()} BillerPay{" "}
              <span className="md:block">@ All right reserved</span>{" "}
            </p>
            <div className="flex items-center gap-4 my-8 ">
              <Link
                className="h-[3.75rem] w-[4.063rem] rounded-[0.86rem] bg-[#ffffff2a] flex items-center justify-center "
                title={socials.twitter.name}
                href={`https://twitter.com/${socials.twitter.username}`}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <socials.twitter.icon className="text-3xl" />
              </Link>
              <Link
                className="h-[3.75rem] w-[4.063rem] rounded-[0.86rem] bg-[#ffffff2a] flex items-center justify-center "
                title={socials.instagram.name}
                href={`https://instagram.com/${socials.instagram.username}`}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <socials.instagram.icon className="text-3xl" />
              </Link>
              <a
                className="h-[3.75rem] w-[4.063rem] rounded-[0.86rem] bg-[#ffffff2a] flex items-center justify-center "
                title={socials.mail.name}
                href={`mailto:${socials.mail.address}`}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <socials.mail.icon className="text-3xl" />
              </a>
            </div>
            <div className="flex flex-col gap-y-3">
              <p className="flex gap-x-4 items-center text-[#F5F2EA]  text-opacity-60">
                <span>
                  <BiSolidPhoneCall className="text-xl" />
                </span>
                <span>08186711799</span>
              </p>
              <p className="flex gap-x-4 items-center text-[#F5F2EA]  text-opacity-60">
                <span>
                  <BiSolidPhoneCall className="text-xl" />
                </span>
                <span>08132284613</span>
              </p>
            </div>
          </div>

          <div className=" md:order-1  w-full md:w-fit flex flex-col items-start ">
            <p className="font-grotesk text-2xl ">Company</p>
            <div className="mt-[1.25rem] md:mt-[2.5rem] flex flex-col text-start gap-4  ">
              {company.map((item) => (
                <div
                  className="text-base md:text-lg font-light text-[#F5F2EA]  text-opacity-60 "
                  key={item.id}
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>

          <div className=" order-2 md:order-1 w-full md:w-fit flex flex-col items-start ">
            <p className="font-grotesk font-semibold text-2xl ">Privacy</p>
            <div className="mt-[1.25rem] md:mt-[2.5rem] text-start  flex flex-col gap-[15px] ">
              {privacy.map((item) => (
                <div
                  className=" text-base md:text-lg font-light text-[#F5F2EA]  text-opacity-60"
                  key={item.id}
                >
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

const socials = {
  twitter: {
    name: "Twitter",
    icon: BsTwitter,
    username: "billerpayafrica",
  },
  instagram: {
    name: "Instagram",
    icon: AiFillInstagram,
    username: "billerpayafrica",
  },
  mail: {
    name: "Mail",
    icon: IoMdMail,
    address: " Billerpayafrica@gmail.com",
  },
};

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
