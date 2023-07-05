"use client";
import Image from "next/image";
import HomePng from "@/assets/images/landing-cta.png";
import Button from "@/components/form/Buttons/Button";
import Collections from "@/components/common/Collections";
import DYNH from "@/components/common/DYNH";
import { animated, useSpring } from "react-spring";
import { apparel, food, games, giftcards, phone } from "@/constants/data";

function CountAnimation({ num }: { num: number }) {
  const { x } = useSpring({
    from: { x: 0 },
    x: num,
    delay: 250,
    config: { mass: 1, tension: 20, friction: 5 },
  });
  return <animated.p>{x.to((n) => n.toFixed(0))}</animated.p>;
}

export default function Home() {
  return (
    <main className="">
      <section className="flex flex-col md:flex-row items-center justify-between mt-[20px] ">
        <div className=" flex flex-col gap-4 md:gap-0 items-center md:items-start flex-1 ">
          <p className="text-[16px] tracking-[13%] leading-[25.6px] text-yellow font-[700] ">
            EMBRACE CRYPTO, FACILITATE PAYMENTS
          </p>
          <h1 className="font-semibold text-center md:text-start text-[50px] md:text-[78px] !font-grotesk leading-[60px] md:leading-[81px]  ">
            Pay in the most popular crypto currencies.
          </h1>
          <p
            className="mt-4 md:mt-8 text-center md:text-start md:border-l-[8px] max-w-[500px] pl-[34px] font-normal border-l-white text-[18px] md:text-[23px]
           text-[#f5f2eaa4]  "
          >
            Giftcards, Travels, Phone, gaming, Food Groceries, Gifts, Health &
            Beauty bills paid with crypto.
          </p>
          <div className="flex justify-center md:justify-start items-center gap-[70px] md:mt-[50px]  ">
            {ctaNumber.map((item) => (
              <div className="" key={item.id}>
                <span className=" font-bold text-[14px] md:text-[16px] text-yellow mb-[50px] ">
                  {item.head}
                </span>
                <div className="font-bold font-grotesk text-[50px] md:text-[65px] flex items-center ">
                  <CountAnimation num={item.content} />
                  <span>+</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 md:mt-0 mt-10 flex justify-end md:h-full md:w-full ">
          <Image src={HomePng} alt="img" />
        </div>
      </section>
      <section className="mt-[180px] hidden md:flex flex-col gap-[70px] ">
        <Collections title="Gift Cards" content={giftcards} link="#" />
        <Collections title="Food" content={food} link="#" />
        <Collections title="Gaming" content={games} link="#" />
        <Collections title="Phone Top Up" content={phone} link="#" />
        <Collections title="Apparel" content={apparel} link="#" />
        <div className=" flex justify-center mt-[90px] ">
          <Button btnTitle="See More" width="w-full md:w-[200px]" />
        </div>
      </section>
      <section className="my-[250px]  ">
        <DYNH />
      </section>
    </main>
  );
}

const ctaNumber = [
  {
    id: 1,
    head: "Bill payments",
    content: 70,
  },
  {
    id: 2,
    head: "People",
    content: 100,
  },
];
