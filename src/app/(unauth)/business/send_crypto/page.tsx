"use client";
import { useState } from "react";
import { WhyBillerPay } from "@/components/common/WhyBillerPay";
import Button from "@/components/form/Buttons/Button";
import Input from "@/components/form/input/Input";
import SelectDropdown from "@/components/form/select/Select";
import Container from "@/components/skeleton/container/Container";
import { FormProvider, useForm } from "react-hook-form";
import TransactModal from "@/components/common/TransactModal";
import { GoCheckCircle } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";

const SendCrypto = () => {
  const [openSuccessModal, setOpenSuccessModal] = useState<boolean>(false);
  const [openCancelModal, setOpenCancelModal] = useState<boolean>(false);
  const [openConfirmModal, setOpenConfirmModal] = useState<boolean>(false);

  const methods = useForm();
  const onSubmit = (data: any) => {
    console.log("data: ", data);
    setOpenConfirmModal((prev) => !prev);
  };

  // random func to test both cancel and confirm modal
  const confirmCallback = () => {
    const rand = Math.round(Math.random() * 10);

    if (rand > 5) {
      setOpenSuccessModal((prev) => !prev);
    } else {
      setOpenCancelModal((prev) => !prev);
    }
  };

  return (
    <Container>
      <main className="flex flex-col items-center pb-[4rem] gap-y-32 ">
        <section className="flex flex-col items-center gap-6 mb-6  w-full">
          <div className="grid justify-items-center gap-3  ">
            <h1 className="font-bold font-grotesk text-[1.563rem] lg:text-[2.5rem] text-[#FEA106] ">
              Send Crypto
            </h1>
          </div>
          <FormProvider {...methods}>
            <form
              className="w-full flex justify-center items-center flex-col"
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <div className="flex flex-col gap-6 mt-5 w-full  justify-center items-center ">
                <SelectDropdown
                  label="Select Wallet"
                  name="wallet_type"
                  options={[
                    {
                      id: 1,
                      label: "Ethereum Wallet",
                      value: "Ethereum Wallet",
                    },
                  ]}
                  className="input-style"
                />
                <SelectDropdown
                  label="Select Coin"
                  name="coin"
                  options={[
                    {
                      id: 1,
                      label: "ETH",
                      value: "ETHEREUM(ETH)",
                    },
                  ]}
                  className="input-style"
                />
                <Input
                  inputStyle="input-style "
                  label="Receiver Address"
                  name="receiver_address"
                  style="w-full md:w-fit flex flex-col gap-y-[1rem]"
                />
                <Input
                  inputStyle="input-style "
                  label="Amount"
                  name="amount"
                  type="number"
                  style="w-full md:w-fit flex flex-col gap-y-[1rem]"
                />
                <Input
                  inputStyle="input-style "
                  name="password"
                  label="Password"
                  type="password"
                  style="w-full md:w-fit flex flex-col gap-y-[1rem]"
                />
              </div>
              <div className="flex justify-center mt-[30px] ">
                <Button
                  btnTitle="Confirm"
                  type="submit"
                  borderRadius="rounded-full"
                  width="min-w-[15.625rem]  !px-6 "
                  textStyle="md:text-lg  font-semibold"
                />
              </div>
            </form>
          </FormProvider>
        </section>
        <WhyBillerPay />
      </main>
      <TransactModal
        open={openConfirmModal}
        setOpen={() => setOpenConfirmModal((prev) => !prev)}
        header="Are you sure you want to send?"
        linkText="Back to home page"
        route="/business"
        hasButton
        buttonText="Confirm"
        buttonStyles="bg-[#7049F7] min-w-[15.625rem]  !px-6  md:text-lg  font-semibold rounded-full py-3 text-white"
        callback={confirmCallback}
      />
      <TransactModal
        icon={<GoCheckCircle size={100} color="#10AF20" />}
        open={openSuccessModal}
        setOpen={() => setOpenSuccessModal((prev) => !prev)}
        header="Transaction successful"
        linkText="Back to home page"
        route="/business"
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
    </Container>
  );
};

export default SendCrypto;
