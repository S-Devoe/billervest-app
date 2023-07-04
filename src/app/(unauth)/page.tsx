import Image from "next/image";
import HomePng from "@/assets/images/home-page.png";
import Button from "@/components/form/Buttons/Button";
import Collections from "@/components/common/Collections";
import DYNH from "@/components/common/DYNH";
import { apparel, food, games, giftcards, phone } from "@/constants/data";



export default function Home() {
  return (
    <main className="">
      <section className="flex items-center justify-between ">
        <div className=" flex flex-col flex-1 ">
          <h1 className="font-bold text-[64px]  ">
            Pay for daily needs with Cryptocurrency
          </h1>
          <p className="mt-[34px] text-[30px] text-yellow-main  ">
            Your Gift card, travels, phone, TV, gaming bills and more can be
            paid with crypto.
          </p>
          <p className="mt-[24px] text-yellow-main text-[30px] ">
            Change your coins into bill payments
          </p>
          <div className="flex items-center gap-[50px] mt-[70px]  ">
            <Button btnTitle="Login" width="w-[200px]" />
            <Button
              btnTitle="Create Account"
              width="w-[250px]"
              bgColor="bg-transparent"
              styles="border-[1.5px] text-[#7049F7] border-[#7049F7] "
            />
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
