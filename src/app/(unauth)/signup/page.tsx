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
        <h1 className="font-bold text-[40px] ">Create BillerPay account</h1>
        <div className="flex flex-col gap-9">
          {sbLinks.map((item) => (
            <div
              className="w-full md:w-[400px] rounded-[5px] bg-purple p-4 flex justify-center items-center gap-[70px] "
              key={item.id}
            >
              <span className=" ">{item.icon}</span>
              <span className="font-semibold text-[20px] ">{item.title}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-[60px] flex flex-col items-center ">
        <h2 className="font-bold text-[20px] ">Or signup with email</h2>
        <p className=" mt-4 flex justify-center text-[20px] ">
          You already have an account?
          <span>
            <Link className="underline pl-2 " href="/login">
              Login
            </Link>
          </span>
        </p>
        <form action="">
          <div className="flex flex-col gap-8 mt-8 ">
            <Input
              inputStyle="w-full md:w-[400px] "
              name="email"
              label="Email"
              type="email"
            />
            <div className="">
              <Input
                inputStyle="w-full md:w-[400px] "
                name="password"
                label="Password"
                type="password"
              />
              <p className="mt-3 max-w-[400px] text-[15px]  ">
                More than 8 characters with upper, lower, numbers & at least one
                special character
              </p>
            </div>
            <Input
              inputStyle="w-full md:w-[400px] "
              name="confirm_password"
              label="Confirm Password"
              type="password"
            />
          </div>
          <div className="flex justify-center mt-[60px] ">
            <Button
              btnTitle="Create Account"
              type="submit"
              width="w-full md:w-[200px] "
            />
          </div>
        </form>
        <p className="mt-9 text-[16px] text-center max-w-[450px] ">
          By proceeding, you accept our
          <Link href="#" className="underline ml-2  ">
            Terms and condition
          </Link>{" "}
          and
          <Link href="#" className="underline ml-2 ">
            Privacy Policy
          </Link>
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
