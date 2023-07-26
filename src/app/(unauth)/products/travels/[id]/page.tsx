"use client";

import CollectionCarousel from "@/components/common/CollectionCarousel";
import Collections from "@/components/common/Collections";
import { ProductHeader } from "@/components/common/ProductHeader";
import TransactModal from "@/components/common/TransactModal";
import TransactWallet from "@/components/common/TransactModal";
import Button from "@/components/form/Buttons/Button";
import CustomDatePicker from "@/components/form/DatePicker/CustomDatePicker";
import Input from "@/components/form/input/Input";
import { RadioInput } from "@/components/form/radio";
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
    <main className="w-full ">
      <Container>
        <section className="my-[2.188rem] md:mt-[50px] flex flex-col items-center  w-full">
          <ProductHeader
            header="Where will you like to go?"
            image={data.image}
          />
          <FormProvider {...methods}>
            <form
              className="w-full md:flex flex-col md:justify-center md:items-center  "
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <div className="flex flex-col justify-center md:items-center gap-6 mt-5 w-full md:w-fit ">
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
                <CustomDatePicker name="date" label="Date" />
                <SelectDropdown
                  label="Class"
                  name="class"
                  options={[
                    {
                      id: 1,
                      label: "Business",
                      value: "business",
                    },
                  ]}
                  className="input-style"
                />
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
                <div className="flex gap-x-8 items-center w-full">
                  <RadioInput
                    labelText="One Way"
                    id="one-way-radio"
                    name="trip-radio"
                  />
                  <RadioInput
                    labelText="Round Trip"
                    id="round-trip-radio"
                    name="trip-radio"
                  />
                </div>
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
        <section className=" flex flex-col  mt-[30px] md:mt-[100px]">
          <h2 className="md:text-center font-semibold text-3xl font-grotesk lg:text-[2.5rem] ">
            See our other services
          </h2>

          <Container>
            <div className="mt-8 md:mt-28  w-full flex flex-col gap-y-10 lg:gap-y-[7rem]">
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
      </Container>
    </main>
  );
};
export default Travels;
