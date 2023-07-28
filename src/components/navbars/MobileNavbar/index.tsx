"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/BP-Logo.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { phone } from "@/constants/data";
import { NavbarDropDown } from "../NavbarDropDown";

type MobileNavbarProps = {
  toggleMobileNav(): void;
  isMobileNavVisible: boolean;
};

export const MobileNavbar = ({
  toggleMobileNav,
  isMobileNavVisible,
}: MobileNavbarProps) => {
  const pathname = usePathname();

  return (
    <div
      className={`fixed inset-0 w-full h-[100vh] bg-[#00000040] ${
        isMobileNavVisible ? "visible opacity-100" : "invisible opacity-0"
      }  transition-all duration-[.5s] z-[50] md:hidden`}
      onClick={() => toggleMobileNav()}
    >
      <nav
        className={`flex flex-col w-[70%] max-w-sm py-6 px-6 bg-black  overflow-y-auto h-full  transition-all duration-[.5s]
        ${isMobileNavVisible ? "translate-x-0" : "translate-x-[-100%]"}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center mb-8">
          <Link
            href={pathname.includes("business") ? "/business" : "/"}
            className="mr-auto font-bold relative  w-32 h-10"
            onClick={toggleMobileNav}
          >
            <Image src={Logo} alt="logo" className="object-contain" />
          </Link>
          <button className="navbar-close" onClick={() => toggleMobileNav()}>
            <svg
              className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <ul>
            <li className="mb-1">
              <Link
                className={`block p-4  font-semibold   hover:text-[#7049F7] rounded ${
                  !pathname.includes("business")
                    ? "text-[#7049F7]"
                    : "text-gray-400"
                } `}
                href="/"
                onClick={toggleMobileNav}
              >
                Personal
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className={`block p-4  font-semibold   hover:text-[#7049F7] rounded ${
                  pathname.includes("business")
                    ? "text-[#7049F7]"
                    : "text-gray-400"
                } `}
                href="/business"
                onClick={toggleMobileNav}
              >
                Business
              </Link>
            </li>
            <MobileNavDropDown
              title="Products"
              data={[
                {
                  id: 1,
                  path: "#",
                  title: "Top Up",
                  name: "top-up",
                  hasDropDown: true,
                  dropDown: phone,
                },
                {
                  id: 2,
                  path: "#",
                  title: "Travel",
                },
                {
                  id: 3,
                  path: "#",
                  title: "Gaming",
                },
                {
                  id: 4,
                  path: "https://www.jumia.com.ng/",
                  title: "E-Commerce",
                },
                {
                  id: 5,
                  path: "#",
                  title: "Others",
                },
              ]}
              toggleMobileNav={toggleMobileNav}
            />
            <MobileNavDropDown
              title="Company"
              data={[
                {
                  id: 1,
                  path: "#",
                  title: "Partner",
                },
                {
                  id: 2,
                  path: "#",
                  title: "News",
                },
                {
                  id: 3,
                  path: "#",
                  title: "About",
                },
              ]}
              toggleMobileNav={toggleMobileNav}
            />
            <li className="mb-1">
              <Link
                className="block p-4 text-gray-400 font-semibold   hover:text-[#7049F7]  rounded"
                href="#"
                onClick={toggleMobileNav}
              >
                Help
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-auto">
          <div className="pt-6">
            <Link
              className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold  bg-[#FEA106] hover:bg-[#daa64c] rounded-xl"
              href={`${pathname.includes("business") ? "/business" : ""}/login`}
              onClick={toggleMobileNav}
            >
              Sign in
            </Link>
            <Link
              className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-[#7049F7] hover:bg-[#54458a]  rounded-xl"
              href={`${
                pathname.includes("business") ? "/business" : ""
              }/signup`}
              onClick={toggleMobileNav}
            >
              Sign Up
            </Link>
          </div>
          <p className="my-4 text-xs text-center text-gray-400">
            <span>Copyright © {new Date().getFullYear()}</span>
          </p>
        </div>
      </nav>
    </div>
  );
};

type MobileNavDropDownProps = {
  title: string;
  data: {
    id: number;
    title: string;
    path: string;
    name?: string;
    hasDropDown?: boolean;
    dropDown?: { id: number; header: string; title: string }[];
  }[];
  toggleMobileNav(): void;
};

function MobileNavDropDown({
  title,
  data,
  toggleMobileNav,
}: MobileNavDropDownProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <li className="p-4">
      <button
        className={`${
          isActive && "mb-3"
        } flex gap-x-2 items-center  font-semibold text-gray-400  hover:text-[#7049F7]`}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <span>{title}</span>
        <span className="ml-1 ">
          <RiArrowDownSLine className="text-xl" />
        </span>
      </button>
      {isActive && (
        <ul className="flex flex-col gap-y-3 text-sm pl-2">
          {data.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className="text-gray-400  font-semibold hover:text-[#7049F7]"
                  onClick={toggleMobileNav}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}
