"use client";

import CollectionCarousel from "@/components/common/CollectionCarousel";
import Collections from "@/components/common/Collections";
import { ProductHeader } from "@/components/common/ProductHeader";
import TransactModal from "@/components/common/TransactModal";
import Button from "@/components/form/Buttons/Button";
import Input from "@/components/form/input/Input";
import SelectDropdown from "@/components/form/select/Select";
import Container from "@/components/skeleton/container/Container";
import { games, phone, services, travels } from "@/constants/data";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { GoCheckCircle } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";
import Cards from "@/assets/images/cards.png";

const Product = () => {
  // states
  const [openSuccessModal, setOpenSuccessModal] = useState<boolean>(false);
  const [openCancelModal, setOpenCancelModal] = useState<boolean>(false);

  // form manipulation
  const methods = useForm();
  const onSubmit = (data: any) => {
    console.log("data: ", data);
    setOpenSuccessModal((prev) => !prev);
  };

  return (
    <main>
      <section className="mt-[35px] md:mt-[50px] flex flex-col items-center  w-full">
        <ProductHeader header="Redeem your voucher" image={Cards} />
        <FormProvider {...methods}>
          <form
            className="flex flex-col items-center mt-[50px] w-full "
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div className="flex flex-col  gap-y-8 w-full md:w-fit ">
              <Input inputStyle="input-style " label="Email" name="email" />
              <Input
                inputStyle="input-style"
                label="Enter Voucher ID"
                name="voucher_id"
              />

              <SelectDropdown
                label="Choose Type"
                name="voucher_type"
                options={[
                  {
                    id: 1,
                    label: "Fully Reedeem",
                    value: "fully reedem",
                  },
                  {
                    id: 2,
                    label: "Partially Reedeem",
                    value: "partially reedem",
                  },
                ]}
                className="input-style"
              />
              <Input
                inputStyle="input-style "
                name="password"
                label="Password"
                type="password"
                required
              />

              <Input
                inputStyle="input-style "
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                required
              />
            </div>
            <div className="flex justify-between md:justify-start md:flex-row items-center gap-4 md:gap-8 mt-12 w-full md:w-fit">
              <Button
                btnTitle="Cancel"
                type="button"
                bgColor="bg-transparent"
                borderRadius="rounded-full "
                width="w-[45%] md:w-[200px] px-4 !md:px-6 "
                height="md:h-[65px] "
                styles="border-[1px] border-[#7049F7] "
                textStyle="  md:text-lg  font-bold "
                onClick={() => setOpenCancelModal((prev) => !prev)}
              />
              <Button
                btnTitle="Confirm"
                type="submit"
                borderRadius="rounded-full "
                width="w-[45%] md:w-[200px] !px-6 "
                height="md:h-[65px] "
                textStyle="  md:text-lg  font-bold "
              />
            </div>
          </form>
        </FormProvider>
      </section>
      <section className=" flex flex-col mt-[30px] md:mt-[100px]  ">
        <h2 className="text-center font-semibold text-[40px] font-grotesk lg:text-[40px] ">
          See our other services
        </h2>

        <Container>
          <section className="mt-8 md:mt-28  w-full flex flex-col gap-y-10 lg:gap-y-[7rem]">
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
            <Collections content={services} title="Other Services 🎊" />
          </section>
        </Container>
      </section>
      <TransactModal
        icon={<GoCheckCircle size={100} color="#10AF20" />}
        open={openSuccessModal}
        setOpen={() => setOpenSuccessModal((prev) => !prev)}
        header="Transaction successful"
        linkText="Back to home page"
        route="/"
      />
      <TransactModal
        icon={<MdOutlineCancel size={100} color="#F90C0C" />}
        open={openCancelModal}
        setOpen={() => setOpenCancelModal((prev) => !prev)}
        header="Transaction failed. Pls try again."
        linkText="Retry"
        linkTextColor="text-[#F90C0C]"
        closeModalWithText
      />
      {/*  */}
    </main>
  );
};
export default Product;
