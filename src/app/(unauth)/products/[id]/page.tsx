"use client";

import MTN from "@/assets/images/p-mtn.png";
import Collections from "@/components/common/Collections";
import Exchange from "@/components/common/Exchange";
import FAQ from "@/components/common/FAQ";
import TopUpWorks from "@/components/common/TopUpWorks";
import Button from "@/components/form/Buttons/Button";
import { apparel, faqData, games, phone } from "@/constants/data";
import Image from "next/image";

const Product = () => {
  return (
    <main>
      <section className="flex flex-col items-center ">
        <div className="relative h-full w-full md:h-[500px] md:w-[500px] ">
          <Image src={MTN} alt="img" fill />
        </div>
        <div className="mt-[60px] flex flex-col items-center gap-[24px] ">
          <h1 className=" font-bold text-[50px] font-source ">MTN Top up</h1>
          <h2 className="text-[28px] font-normal  ">
            Rating: 5.0 Reviews: 90{" "}
          </h2>
          <p className="font-source text-center font-normal text-[20px] ">
            MTN formerly M-Cell, is one of Nigeria&apos;s premier mobile service
            providers. With Bitrefill&lsquo;s MTN refill, you can top-up mobile
            minutes and data from MTN with Bitcoin, Ethereum, Dash, Dogecoin,
            and Litecoin.
          </p>
          <Exchange />
        </div>
        <div className="mt-[100px]  ">
          <FAQ data={faqData} />
        </div>
      </section>
      <section className="mt-[180px] flex flex-col gap-[70px] ">
        <Collections title="Gaming" content={games} link="#" />
        <Collections title="Phone Top Up" content={phone} link="#" />
        <Collections title="Apparel" content={apparel} link="#" />
        <div className=" flex justify-center mt-[90px] ">
          <Button btnTitle="See More" width="w-full md:w-[200px]" />
        </div>
      </section>
      <section className="my-[60px] " >
        <TopUpWorks />
      </section>
    </main>
  );
};
export default Product;
