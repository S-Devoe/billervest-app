"use client";
import Logo from "@/assets/images/BP-Logo.png";
import Image from "next/image";
import Link from "next/link";
import Button from "../form/Buttons/Button";
import { useRouter, usePathname } from "next/navigation";
import { IoMenu, IoClose } from "react-icons/io5";

const UnAuthNavbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  console.log(pathname);

  return (
    <>
      {/* desktop view */}
      <nav className="w-full py-9 hidden md:flex items-center justify-between ">
        <div className="flex items-center gap-[40px] ">
          <Link href="/">
            <Image src={Logo} alt="logo" />
          </Link>

          <div className="">
            <ul className="flex items-center gap-[24px] text-[16px] font-[700]  ">
              <li
                className={`${
                  !pathname.includes("business") &&
                  "text-purple underline decoration-[2px] underline-offset-4 "
                }`}
              >
                <Link href="#">Personal</Link>
              </li>
              <li
                className={`${
                  pathname.includes("business") &&
                  "text-purple underline decoration-[2px] underline-offset-4 "
                }`}
              >
                <Link href="#">Business</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-[24px] ">
          <div className="">
            <div className="flex items-center gap-8 ">
              <ul className="flex items-center gap-8 text-[16px] font-[700]  ">
                <li>
                  <Link href="#">Products</Link>
                </li>
                <li>
                  <Link href="#">Company</Link>
                </li>
                <li>
                  <Link href="#">Help</Link>
                </li>
              </ul>
              <div className="flex-1 ml-[130px] flex gap-8 items-center font-normal text-[16px]  ">
                <Link className=" " href="/signup">
                  Sign Up
                </Link>
                <Button
                  onClick={() => router.push("/login")}
                  btnTitle="Sign in"
                  borderRadius="rounded-[56px] "
                  height="h-[64px]"
                  width="w-[130px] "
                  textStyle="text-[16px] font-bold font-poppins "
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* mobile */}
      <nav className="mobile-fixed border-b-[0.1px] bg-dark-main border-b-grey-main flex w-full py-5 px-4 items-center justify-between md:hidden">
        <div className="flex items-center justify-between gap-[40px] w-full ">
          <Link href="/" className="relative h-[49px] w-[198px] ">
            <Image src={Logo} alt="logo" fill sizes='100%' />
          </Link>

          <div className="">
            <IoMenu color="#fff" size={29} />
          </div>
        </div>
      </nav>
    </>
  );
};
export default UnAuthNavbar;
