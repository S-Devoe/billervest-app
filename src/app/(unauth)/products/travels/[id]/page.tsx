"use client";

import CollectionCarousel from "@/components/common/CollectionCarousel";
import Collections from "@/components/common/Collections";
import TransactModal from "@/components/common/TransactModal";
import TransactWallet from "@/components/common/TransactModal";
import Button from "@/components/form/Buttons/Button";
import CustomDatePicker from "@/components/form/DatePicker/CustomDatePicker";
import Input from "@/components/form/input/Input";
import SelectDropdown from "@/components/form/select/Select";
import Container from "@/components/skeleton/container/Container";
import { games, phone, services, travels } from "@/constants/data";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useId } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { GoCheckCircle } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";

const Travels = () => {
  console.log(useId());

  const { id } = useParams();
  const data = travels.filter((product) => product.id === Number(id))[0];
  // states
  const [openSuccessModal, setOpenSuccessModal] = useState<boolean>(false);
  const [openCancelModal, setOpenCancelModal] = useState<boolean>(false);

  // form manipulation
  const methods = useForm();
  const onSubmit = (data: any) => {
    console.log("data: ", data);
    setOpenSuccessModal((prev) => !prev);
  };

  //   dummy airports data
  const airports = [
    {
      id: useId(),
      value: "Nnamdi Azikiwe International Airport ",
      label: "Nnamdi Azikiwe International Airport ",
    },
    {
      id: useId(),
      value: "Akanu Ibiam International Airport ",
      label: "Akanu Ibiam International Airport ",
    },
    {
      id: useId(),
      value: "Kaduna International Airport ",
      label: "Kaduna International Airport ",
    },
    {
      id: useId(),
      value: "Mallam Aminu Kano International Airport",
      label: "Mallam Aminu Kano International Airport",
    },
    {
      id: useId(),
      value: "Murtala Muhammed International Airport",
      label: "Murtala Muhammed International Airport",
    },
    {
      id: useId(),
      value: "Port Harcourt International Airport",
      label: "Port Harcourt International Airport",
    },
  ];

  return (
    <main>
      <section className="mt-[35px] md:mt-[50px] flex flex-col items-center  ">
        <h1 className="text-center font-semibold text-[40px] font-grotesk lg:text-[70px] ">
          Where will you like to go?
        </h1>
        <div className="mt-[20px] md:mt-[50px] h-fit p-6 max-w-[300px] flex items-center aspect-video justify-center bg-white rounded-[16px] md:rounded-[24px]  md:max-w-[500px]  ">
          <Image
            src={data.image}
            alt="img"
            className=" h-[150px] max-w-[250px] md:h-[165px] md:max-w-[300px]  "
          />
        </div>
        <FormProvider {...methods}>
          <form
            className="flex flex-col items-center mt-[50px] w-full "
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div className="flex flex-col items-center gap-8 w-full">
              <SelectDropdown
                label="From"
                name="from"
                options={airports}
                className="input-style"
              />
              <SelectDropdown
                label="To"
                name="to"
                options={airports}
                className="input-style"
              />
              <CustomDatePicker name="date" label='Date' />
              <Input
                inputStyle="input-style "
                label="Enter Phone number"
                name="phoneNumber"
                type="number"
                required
                rules={{
                  greaterThanTen: (value: string) =>
                    value.length > 10 ||
                    "Phone number must be 11 digits or more",
                }}
              />
              <Input
                inputStyle="input-style "
                label="Amount"
                name="number"
                type="number"
                required
                rules={{
                  greaterThanZero: (value: string) =>
                    parseInt(value) > 0 || "Enter a valid amount",
                }}
              />
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
                // onClick={() => methods.reset()}
                onClick={() => setOpenCancelModal((prev) => !prev)}
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
        </FormProvider>
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
      <TransactModal
        icon={<GoCheckCircle size={100} color="#10AF20" />}
        open={openSuccessModal}
        setOpen={() => setOpenSuccessModal((prev) => !prev)}
        header="Your line has been topped up successfully."
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
export default Travels;
