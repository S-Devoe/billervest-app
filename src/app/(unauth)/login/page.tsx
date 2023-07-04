"use client";

import Button from "@/components/form/Buttons/Button";
import Input from "@/components/form/input/Input";
import Link from "next/link";

const Login = () => {
  return (
    <main>
      <section className="flex items-center flex-col mb-[200px]  ">
        <h1 className="font-bold text-[40px]  ">
          Log into your BillerPay account
        </h1>
        <form className="flex flex-col gap-8 mt-[80px] ">
          <Input
            inputStyle="w-full md:w-[450px]  "
            label="Email"
            name="email"
          />
          <Input
            inputStyle="w-full md:w-[450px]  "
            label="Password"
            name="password"
            type="password"
          />
          <Link
            className="underline mt-[-10px] underline-offset-2 flex justify-end "
            href="#"
          >
            Forgot password?
          </Link>
          <p className=" mt-[-8px] flex justify-center text-[20px] " >
            You don’t have an account? 
            <span>
                <Link className="underline pl-2 " href="/signup">  Sign up!</Link>
            </span>
          </p>
          <div className="flex justify-center mt-2 ">
            <Button
              btnTitle="Login"
              type="submit"
              width="w-full md:w-[200px] "
            />
          </div>
        </form>
      </section>
    </main>
  );
};
export default Login;
