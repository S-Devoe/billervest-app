"use client";
import Image from "next/image";
import HomePng from "@/assets/images/business-banner.png";
import { animated, useSpring } from "react-spring";
import Container from "@/components/skeleton/container/Container";
import { CompaniesAcceptingCrypto } from "@/components/common/CompaniesAcceptingCrypto";
import { BusinessServices } from "@/components/common/BusinessServices";
import { HowToUseBillerPay } from "@/components/common/HowToUseBillerPay";

function CountAnimation({ num }: { num: number }) {
  const { x } = useSpring({
    from: { x: 0 },
    x: num,
    delay: 250,
    config: { mass: 1, tension: 20, friction: 5 },
  });
  return <animated.p>{x.to((n) => n.toFixed(0))}</animated.p>;
}

export default function BusinessHome() {
  return (
    <main className="">
      <Container>
        <section className="flex flex-col md:flex-row items-center justify-between mt-6 md:gap-y-6 ">
          <div className=" flex flex-col gap-y-5 md:gap-0 items-center md:items-start flex-1  ">
            <p className="text-left text-sm w-full md:w-fit tracking-[0.13rem]  md:text-start md:leading-[25.6px] text-yellow font-[700] ">
              EMBRACE CRYPTO, FACILITATE PAYMENTS
            </p>
            <h1 className="font-semibold  text-start text-3xl md:text-[4.875rem] font-grotesk  md:leading-[5.063rem]">
              Cryptocurrency payments made globally.
            </h1>
            <p
              className="md:mt-8 text-start w-full md:w-fit md:border-l-[8px] md:max-w-[31.125rem] md:pl-8 font-normal border-l-white text-sm md:text-[1.2rem]
           text-[#F5F2EA]  text-opacity-60 md:leading-[2.188rem]"
            >
              Accept and send crypto payments very swiftly with low fee and
              improved security.
            </p>
            <div className="flex justify-start items-center md:gap-[70px] md:mt-[50px]  w-full md:w-fit gap-x-8">
              {ctaNumber.map((item) => (
                <div className="" key={item.id}>
                  <span className=" font-bold text-xs md:text-sm text-yellow mb-12 ">
                    {item.head}
                  </span>
                  <div className="font-bold font-grotesk text-2xl md:text-[3.5rem] md:leading-[4.5rem] flex items-center ">
                    <CountAnimation num={item.content} />
                    <span>+</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" md:mt-0 mt-10 flex justify-end  ">
            <Image src={HomePng} alt="img" priority height={500} width={500} />
          </div>
        </section>
      </Container>
      <div className="flex flex-col gap-y-8">
        <CompaniesAcceptingCrypto />
        <BusinessServices />
        <HowToUseBillerPay />
      </div>
    </main>
  );
}

const ctaNumber = [
  {
    id: 1,
    head: "Transactions",
    content: 70,
  },
  {
    id: 2,
    head: "Businesses",
    content: 100,
  },
  {
    id: 3,
    head: "Countries",
    content: 20,
  },
];
