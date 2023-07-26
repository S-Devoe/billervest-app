"use client";

import Link from "next/link";
import Container from "../skeleton/container/Container";
import Cards from "@/assets/images/cards.png";
import Image from "next/image";
import Button from "../form/Buttons/Button";
import { useRouter } from "next/navigation";

const DYNH = () => {
  const router = useRouter();

  return (
    <div className="linear-bg  grid justify-items-center mt-[5.625rem] py-16  w-full">
      <Container>
        <div className="flex w-full flex-col md:flex-row  items-center justify-between gap-4 md:gap-6 ">
          <div className="flex-1 ">
            <h3 className="  font-semibold md:text-[4.875rem] font-grotesk text-yellow text-[2.3rem] md:leading-[5.063rem] ">
              Convert all gift <br className="hidden md:inline" /> cards to
              cash. 🤑
            </h3>
            <p className="md:text-[1.438rem] my-6 md:my-10">
              See step-by-step process on how fastly you{" "}
              <br className="hidden md:inline" /> can redeem all giftcards at
              billerpay
            </p>
            <Button
              btnTitle="Learn More"
              borderRadius="rounded-full"
              width="w-full md:w-[12.5rem]"
              bgColor="bg-yellow"
              textStyle="font-semibold"
              onClick={() => router.push("/products/redeem_voucher")}
            />
          </div>
          <div className="flex justify-center">
            <Image src={Cards} alt="img" width={500} />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default DYNH;
