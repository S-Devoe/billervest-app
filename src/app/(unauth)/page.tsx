"use client";
import Image from "next/image";
import HomePng from "@/assets/images/landing-cta.png";
import Button from "@/components/form/Buttons/Button";
import Collections from "@/components/common/Collections";
import DYNH from "@/components/common/DYNH";
import { animated, useSpring } from "react-spring";
import { ecommerce, games, phone, services, travels } from "@/constants/data";
import Container from "@/components/skeleton/container/Container";
import ChooseBillerPay from "@/components/common/ChooseBillerPay";
import CollectionCarousel from "@/components/common/CollectionCarousel";

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
      <Container>
        <section className="flex flex-col md:flex-row items-center justify-between  md:gap-x-6 pt-10 md:pt-0">
          <div className=" flex flex-col gap-y-4 md:gap-y-5 md:gap-0 items-center md:items-start flex-1  ">
            <p className="text-left text-sm w-full md:w-fit tracking-[0.13rem]  md:text-start md:leading-[25.6px] text-yellow font-[700] ">
              EMBRACE CRYPTO, FACILITATE PAYMENTS
            </p>
            <h1 className="font-semibold  text-start text-3xl md:text-[4.875rem] font-grotesk  md:leading-[5.063rem]  ">
              Pay in the most popular crypto currencies.
            </h1>
            <p
              className="md:mt-8 text-start md:border-l-[8px] md:max-w-[31.125rem] md:pl-8 font-normal border-l-white text-sm md:text-[1.2rem]
           text-[#F5F2EA]  text-opacity-60 md:leading-[2.188rem]"
            >
              Giftcards, Travels, Phone, gaming, Food Groceries, Gifts, Health &
              Beauty bills paid with crypto.
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
      <ChooseBillerPay />
      <Container>
        <section className="mt-8 md:mt-28  w-full flex flex-col gap-y-10 lg:gap-y-[7rem] ">
          <CollectionCarousel
            link="#"
            title="Top your mobile ASAP ⚡"
            contentArr={phone}
            linkType="products/top-up"
          />
          <CollectionCarousel
            link="#"
            title="ECommerce 💸"
            contentArr={ecommerce}
          />
          <CollectionCarousel
            link="#"
            title="Travels ✈️"
            contentArr={travels}
            linkType="products/travels"
          />
          <CollectionCarousel
            link="#"
            title="Gaming Cards 🎮"
            contentArr={games}
            linkType="products/gaming"
          />
          <Collections content={services} title="Other Services 🎊" />
        </section>
      </Container>
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
