"use client";
import Logo from "@/assets/images/BP-logo.png";
import Image from "next/image";
import Link from "next/link";
import Button from "../form/Buttons/Button";
import { useRouter } from "next/navigation";

const UnAuthNavbar = () => {
  const router = useRouter();

  return (
    <nav className="px-8 py-9 flex items-center justify-between ">
      <div className="flex items-center gap-[24px] ">
        <Link href="/">
          <Image src={Logo} alt="logo" />
        </Link>

        <div className="">
          <ul className="flex items-center gap-[24px] text-[20px] font-[400]  ">
            <li>
              <Link href="#">Personnal</Link>
            </li>
            <li>
              <Link href="#">Business</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-[24px] ">
        <div className="">
          <div className="flex items-center gap-8 ">
            <ul className="flex items-center gap-8 text-[20px] font-[400]  ">
              <li>
                <Link href="#">Products</Link>
              </li>
              <li>
                <Link href="#">Company</Link>
              </li>
              <li>
                <Link href="#">Help</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
            </ul>
            <Button
              onClick={() => router.push("/signup")}
              btnTitle="Create Account"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default UnAuthNavbar;
