"use client";

import { WhyBillerPay } from "@/components/common/WhyBillerPay";
import Button from "@/components/form/Buttons/Button";
import Input from "@/components/form/input/Input";
import Container from "@/components/skeleton/container/Container";
import Link from "next/link";

const Login = () => {
  return (
    <Container>
      <main className="flex flex-col items-center pb-[4rem] gap-y-32 ">
        <section className="flex flex-col items-center gap-6 mb-6  w-full">
          <div className="grid justify-items-center gap-3  ">
            <h1 className="font-bold font-grotesk text-[1.563rem] lg:text-[2.5rem] text-[#FEA106] ">
              Login to your account
            </h1>
          </div>
          <form
            action=""
            className="w-full flex justify-center items-center flex-col"
          >
            <div className="flex flex-col gap-6 mt-5 w-full  justify-center items-center ">
              <Input
                inputStyle="input-style "
                label="Email"
                name="email"
                style="w-full md:w-fit flex flex-col gap-y-[1rem]"
              />
              <Input
                inputStyle="input-style "
                name="password"
                label="Password"
                type="password"
                style="w-full md:w-fit flex flex-col gap-y-[1rem]"
              />
            </div>
            <div className="flex justify-center mt-[30px] ">
              <Button
                btnTitle="Login"
                type="submit"
                borderRadius="rounded-full"
                width="w-full md:min-w-[15.625rem] !px-6 "
                textStyle="text-lg  font-semibold"
              />
            </div>
          </form>
          <div className="mt-[1.25rem] flex flex-col items-center input-style ">
            <p className=" mt-4 flex justify-center text-sm md:text-lg text-grey-text ">
              Not registered?
              <span>
                <Link
                  className="underline pl-2 text-[#FEA106] "
                  href="/business/signup"
                >
                  Signup
                </Link>
              </span>
            </p>
          </div>
        </section>
        <WhyBillerPay />
      </main>
    </Container>
  );
};
export default Login;
