"use client";

import Button from "@/components/form/Buttons/Button";
import Input from "@/components/form/input/Input";
import Container from "@/components/skeleton/container/Container";
import Link from "next/link";

const Login = () => {
  return (
    <main className="flex flex-col items-center pb-[5rem] w-full">
      <Container>
        <section className="flex flex-col items-center gap-6 w-full ">
          <div className="grid justify-items-center gap-3 ">
            <h1 className="font-bold font-grotesk text-[25px] lg:text-[40px]  ">
              Welcome Back
            </h1>
            <p className="text-[15px] lg:text-[18px] text-[#808080]  ">
              Login back to your account
            </p>
          </div>
          <form className="w-full md:flex flex-col md:justify-center md:items-center  ">
            <div className="flex flex-col justify-center md:items-center gap-6 mt-5 w-full md:w-fit ">
              <Input inputStyle="input-style " label="Email" name="email" />
              <Input
                inputStyle="input-style  "
                label="Password"
                name="password"
                type="password"
              />
              <Link
                className="underline mt-[-10px] text-sm text-end w-full md:text-base text-[#808080] lg:text-lg underline-offset-2 flex justify-end "
                href="#"
              >
                Forgot password?
              </Link>
              <p className=" flex justify-center text-sm md:text-base text-[#808080] lg:text-lg ">
                You don’t have an account?
                <span>
                  <Link className="underline pl-2 " href="/signup">
                    {" "}
                    Sign up!
                  </Link>
                </span>
              </p>
            </div>
            <div className="flex justify-center mt-5 ">
              <Button
                btnTitle="Login"
                type="submit"
                borderRadius="rounded-full "
                width="w-full md:w-fit !px-12 "
                textStyle="  md:text-lg  font-bold "
              />
            </div>
          </form>
        </section>
      </Container>
    </main>
  );
};
export default Login;
