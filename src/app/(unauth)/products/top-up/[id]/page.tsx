"use client";

import CollectionCarousel from "@/components/common/CollectionCarousel";
import Collections from "@/components/common/Collections";
import Button from "@/components/form/Buttons/Button";
import Input from "@/components/form/input/Input";
import Container from "@/components/skeleton/container/Container";
import { games, phone, services, travels } from "@/constants/data";
import Image from "next/image";
import { useParams } from "next/navigation";

const Product = () => {
  const { id } = useParams();

  const data = phone.filter((product) => product.id === Number(id))[0];

  console.log(data);

  return (
    <main>
      <section className="mt-[35px] md:mt-[50px] flex flex-col items-center  ">
        <h1 className="text-center font-semibold text-[40px] font-grotesk lg:text-[70px] ">
          {data.header}
        </h1>
        <Image
          src={data.image}
          alt="img"
          className=" h-[150px] max-w-[250px] md:h-[175px] md:max-w-[300px] mt-[20px] md:mt-[50px] "
        />
        <form className="flex flex-col items-center mt-[50px] w-full ">
          <div className="flex flex-col gap-8 w-full">
            <Input
              inputStyle="input-style "
              label="Enter Phone number"
              name="phoneNumber"
              type="number"
            />
            <Input inputStyle="input-style " label="Amount" name="number" />
            <Input
              inputStyle="input-style "
              label="Remarks (optional)"
              name="remarks"
            />

            <Input
              inputStyle="input-style "
              name="password"
              label="Password"
              type="password"
            />

            <Input
              inputStyle="input-style "
              name="confirmPassword"
              label="Confirm Password"
              type="password"
            />
          </div>
          <div className="flex items-center gap-4 md:gap-8 mt-[70px] ">
            <Button
              btnTitle="Cancel"
              type="button"
              bgColor="bg-transparent"
              borderRadius="rounded-[30px] md:rounded-[40px] "
              width="w-full md:w-[200px] !px-6 "
              height="h-[65px] "
              styles="border-[1px] border-[#7049F7] "
              textStyle="text-[16px] md:text-[18px] font-bold "
            />
            <Button
              btnTitle="Confirm"
              type="submit"
              borderRadius="rounded-[30px] md:rounded-[40px] "
              width="w-full md:w-[200px] !px-6 "
              textStyle="text-[16px] md:text-[18px] font-bold "
              height="h-[65px] "
            />
          </div>
        </form>
      </section>
      <section className=" flex flex-col mt-[30px] md:mt-[100px]  ">
        <h2 className="text-center font-semibold text-[40px] font-grotesk lg:text-[40px] ">
          See our other services
        </h2>

        <Container>
          <div className="my-[40px] flex flex-col gap-10 ">
            <CollectionCarousel
              link="#"
              title="Travels ✈️"
              contentArr={travels}
            />
            <CollectionCarousel
              link="#"
              title="Gaming Cards 🎮"
              contentArr={games}
            />
          </div>
          <Collections content={services} title="Other Services 🎊" />
          <div className=" flex justify-start mt-8  md:mt-[40px] ">
            <Button
              btnTitle="Load More"
              borderRadius="rounded-[8px] md:rounded-[50px]"
              width="w-full md:w-[200px]"
            />
          </div>
        </Container>
      </section>
    </main>
  );
};
export default Product;
