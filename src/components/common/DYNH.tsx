"usw client";

import Link from "next/link";
import Container from "../skeleton/container/Container";
import Cards from "@/assets/images/cards.png";
import Image from "next/image";
import Button from "../form/Buttons/Button";

const DYNH = () => {
  return (
    <div className="linear-bg w-screen grid justify-items-center mt-[90px] py-[80px] ">
      <Container>
        <div className="flex w-full flex-col md:flex-row  items-center justify-between gap-4 md:gap-[24px] ">
          <div className="">
            <h3 className=" max-w-[600px] font-semibold md:text-[60px] font-grotesk text-yellow text-[40px] ">
              Convert all gift cards to cash. 🤑
            </h3>
            <p className="text-[20px] my-[40px] max-w-[550px] ">
              See step-by-step process on how fastly you can redeem all
              giftcards at billerpay
            </p>
            <Button
              btnTitle="Learn More"
              borderRadius="rounded-[50px]"
              width="w-full md:w-[200px]"
              bgColor="bg-yellow"
            />
          </div>
          <div className="flex justify-center">
            <Image src={Cards} alt="img" sizes="100%" />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default DYNH;
