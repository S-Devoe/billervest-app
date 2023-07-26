"use client";
import Logo from "@/assets/images/BP-Logo.png";
import Image from "next/image";
import Link from "next/link";
import Button from "../form/Buttons/Button";
import { useRouter, usePathname } from "next/navigation";
import { IoMenu, IoClose } from "react-icons/io5";
import Container from "../skeleton/container/Container";
import { NavbarDropDown } from "./NavbarDropDown";

const UnAuthNavbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="w-full mb-6">
      <Container>
        {/* desktop view */}
        <nav className="w-full py-[2.375rem] hidden md:flex items-center justify-between ">
          <div className="flex items-center gap-x-[2.438rem]   ">
            <Link href={pathname.includes("business") ? "/business" : "/"}>
              <Image src={Logo} alt="logo" width={130} />
            </Link>

            <div className="">
              <ul className="flex items-center gap-x-[1.313rem] text-base font-bold  ">
                <li
                  className={`${
                    !pathname.includes("business") &&
                    "text-purple underline decoration-[2px] underline-offset-4 "
                  }`}
                >
                  <Link href="/">Personal</Link>
                </li>
                <li
                  className={`${
                    pathname.includes("business") &&
                    "text-purple underline decoration-[2px] underline-offset-4 "
                  }`}
                >
                  <Link href="/business">Business</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <ul className="flex items-center gap-x-[3.5rem]   text-base font-[700]  ">
              <li>
                <NavbarDropDown
                  title="Products"
                  lists={[
                    {
                      id: 1,
                      path: "#",
                      title: "Top Up",
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
                      path: "#",
                      title: "E-Commerce",
                    },
                    {
                      id: 5,
                      path: "#",
                      title: "Others",
                    },
                  ]}
                />
              </li>
              <li>
                <NavbarDropDown
                  title="Company"
                  lists={[
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
                />
              </li>
              <li>
                <Link href="#" className="text-[#F5F2EA]">
                  Help
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex  items-center font-normal gap-x-10">
            <Link
              className="  hover:text-slate-200 text-[#EDEBE2] text-opacity-80 transition-colors duration-300 text-base font-semibold "
              href={`${
                pathname.includes("business") ? "/business" : ""
              }/signup`}
            >
              Sign Up
            </Link>
            <Button
              onClick={() =>
                router.push(
                  `${pathname.includes("business") ? "/business" : ""}/login`
                )
              }
              btnTitle="Sign in"
              borderRadius="rounded-full"
              width="w-[8.125rem]"
              textStyle="text-base font-bold font-poppins"
              paddingBlock="py-3"
              paddingInline="px-6"
              bgColor="bg-[#7049F7] hover:bg-[#4519e4] transition-colors duration-300"
            />
          </div>
        </nav>
        {/* mobile */}
        <nav className="mobile-fixed border-b-[0.1px] bg-dark-main border-b-gray-500  flex w-full py-5 px-4 items-center justify-between md:hidden">
          <div className="flex items-center justify-between gap-[40px] w-full ">
            <Link href="/" className="relative h-8 w-36">
              <Image src={Logo} alt="logo" fill sizes="100%" />
            </Link>

            <button className="">
              <IoMenu color="#fff" size={26} />
            </button>
          </div>
        </nav>
      </Container>
    </div>
  );
};
export default UnAuthNavbar;
