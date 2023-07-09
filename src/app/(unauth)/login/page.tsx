"use client";

import Button from "@/components/form/Buttons/Button";
import Input from "@/components/form/input/Input";
import Link from "next/link";

const Login = () => {
  return (
    <main>
      <section className="flex items-center flex-col mt-8 md:mt-1 mb-[200px]  ">
        <h1 className="font-bold font-grotesk text-[25px] lg:text-[40px]  ">
          Welcome back
        </h1>
        <p className="text-[15px] lg:text-[18px] text-[#808080] mt-3 ">
          Login back to your account
        </p>
        <form className="flex flex-col gap-6 mt-[15px] lg:mt-[40px] ">
          <Input
            inputStyle="input-style "
            label="Email"
            name="email"
          />
          <Input
            inputStyle="input-style  "
            label="Password"
            name="password"
            type="password"
          />
          <Link
            className="underline mt-[-10px] text-[16px] text-[#808080] lg:text-[18px] underline-offset-2 flex justify-end "
            href="#"
          >
            Forgot password?
          </Link>
          <p className=" mt-[-8px] flex justify-center text-[16px] text-[#808080] lg:text-[18px] ">
            You don’t have an account?
            <span>
              <Link className="underline pl-2 " href="/signup">
                {" "}
                Sign up!
              </Link>
            </span>
          </p>
          <div className="flex justify-center mt-2 ">
            <Button
              btnTitle="Login"
              type="submit"
              borderRadius="rounded-[60px] "
              width="w-full md:w-[150px] "
            />
          </div>
        </form>
      </section>
    </main>
  );
};
export default Login;
