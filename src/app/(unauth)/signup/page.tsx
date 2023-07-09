"use client";

import Button from "@/components/form/Buttons/Button";
import Input from "@/components/form/input/Input";
import AppleStrokeIcon from "@/components/icons/AppleStrokeIcon";
import GoogleStrokeIcon from "@/components/icons/GoogleStrokeIcon";
import WalletStrokeIcon from "@/components/icons/WalletStrokeIcon";
import Link from "next/link";

const SignUp = () => {
  return (
    <main className="flex flex-col items-center pb-[300px] ">
      <section className="flex flex-col items-center gap-6 ">
        <div className="grid justify-items-center gap-3 ">
          <h1 className="font-bold font-grotesk text-[25px] lg:text-[40px]  ">
            Welcome to BillerPay
          </h1>
          <p className="text-[15px] lg:text-[18px] text-[#808080]  ">
            Let get you started
          </p>
        </div>
        <form action="">
          <div className="flex flex-col gap-6 mt-5 ">
            <Input
              inputStyle="input-style "
              label="Name"
              name="name"
            />
            <Input
              inputStyle="input-style "
              label="Email"
              name="email"
            />
            <Input
              inputStyle="input-style "
              label="Phone Number"
              name="phoneNumber"
            />
            <div className="">
              <Input
                inputStyle="input-style "
                name="password"
                label="Password"
                type="password"
              />
              <p className="mt-3 max-w-[430px] text-[14px] text-grey-text ">
                More than 8 characters with upper, lower, numbers & at least one
                special character
              </p>
            </div>
            <Input
              inputStyle="input-style "
              name="confirmPassword"
              label="Confirm Password"
              type="password"
            />
          </div>
          <div className="flex justify-center mt-[30px] ">
            <Button
              btnTitle="Create Account"
              type="submit"
              borderRadius="rounded-[60px] "
              width="w-full md:w-fit !px-6 "
            />
          </div>
        </form>
      </section>
      <section className="mt-[20px] flex flex-col items-center ">
        <p className=" mt-4 flex justify-center text-[18px] text-grey-text ">
          You already have an account?
          <span>
            <Link className="underline pl-2 " href="/login">
              Login
            </Link>
          </span>
        </p>
      </section>
    </main>
  );
};
export default SignUp;

const sbLinks = [
  {
    id: 1,
    title: "Connect Wallet",
    icon: <WalletStrokeIcon />,
  },
  {
    id: 2,
    title: "Connect Google",
    icon: <GoogleStrokeIcon />,
  },
  {
    id: 3,
    title: "Connect Apple",
    icon: <AppleStrokeIcon />,
  },
];
