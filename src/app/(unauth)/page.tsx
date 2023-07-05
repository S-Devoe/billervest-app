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
  return <animated.p>{x.to(n => n.toFixed(0))}</animated.p>;
}

export default function Home() {
  return (
    <main className="">
      <section className="flex items-center justify-between mt-[20px] ">
        <div className=" flex flex-col flex-1 ">
          <p className="text-[16px] tracking-[13%] leading-[25.6px] text-yellow font-[700] ">
            EMBRACE CRYPTO, FACILITATE PAYMENTS
          </p>
          <h1 className="font-semibold text-[78px] !font-grotesk leading-[81px]  ">
            Pay in the most popular crypto currencies.
          </h1>
          <p
            className="mt-8 border-l-[8px] max-w-[500px] pl-[34px] font-normal border-l-white text-[23px]
           text-[#f5f2eaa4]  "
          >
            Giftcards, Travels, Phone, gaming, Food Groceries, Gifts, Health &
            Beauty bills paid with crypto.
          </p>
          <div className="flex items-center gap-[70px] mt-[50px]  ">
            {ctaNumber.map((item) => (
              <div className="" key={item.id}>
                <span className=" font-bold text-[16px] text-yellow mb-[50px] ">
                  {item.head}
                </span>
                <div className="font-bold font-grotesk text-[65px] flex items-center ">
                  <CountAnimation num={item.content} />
                  <span>+</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-end ">
          <Image src={HomePng} alt="img" />
        </div>
      </section>
      <section className="mt-[180px] flex flex-col gap-[70px] ">
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
