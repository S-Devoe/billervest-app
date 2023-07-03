import Image from "next/image";
import HomePng from "@/assets/images/home-page.png";
import Button from "@/components/form/Buttons/Button";
import Collections from "@/components/commons/Collections";

// images
import Spar from "@/assets/images/companies/spar.png";
import Nord from "@/assets/images/companies/nord.png";
import Place from "@/assets/images/companies/place.png";
import Jumia from "@/assets/images/companies/jumia.png";
import Fortnite from "@/assets/images/companies/fortnite.png";
import Fortnyt from "@/assets/images/companies/fortnyt.png";
import Pubg from "@/assets/images/companies/pubg.png";
import League from "@/assets/images/companies/league.png";
import Mtn from "@/assets/images/companies/mtn.png";
import Airtel from "@/assets/images/companies/airtel.png";
import Glo from "@/assets/images/companies/glo.png";
import Asos from "@/assets/images/companies/asos.png";
import Ms from "@/assets/images/companies/ms.png";



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
      </section>
    </main>
  );
}

const giftcards = [
  {
    id: 1,
    image: Spar,
  },
  {
    id: 2,
    image: Nord,
  },
  {
    id: 3,
    image: Place,
  },
  {
    id: 4,
    image: Jumia,
  },
];


const food = [
  {
    id: 1,
    image: Jumia,
  },
  {
    id: 2,
    image: Jumia,
  },
  {
    id: 3,
    image: Jumia,
  },
  {
    id: 4,
    image: Jumia,
  },
];

const games = [
  {
    id: 1,
    image: Fortnite,
  },
  {
    id: 2,
    image: Pubg,
  },
  {
    id: 3,
    image: Fortnyt,
  },
  {
    id: 4,
    image: League,
  },
];

const phone = [
  {
    id: 1,
    image: Mtn,
  },
  {
    id: 2,
    image: Airtel,
  },
  {
    id: 3,
    image: Glo,
  },
  {
    id: 4,
    image: Mtn,
  },
];

const apparel = [
  {
    id: 1,
    image: Ms,
  },
  {
    id: 2,
    image: Asos,
  },
  {
    id: 3,
    image: Asos,
  },
  {
    id: 4,
    image: Ms,
  },
];