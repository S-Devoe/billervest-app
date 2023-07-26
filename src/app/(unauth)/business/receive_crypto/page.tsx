"use client";
import { WhyBillerPay } from "@/components/common/WhyBillerPay";
import Button from "@/components/form/Buttons/Button";
import Input from "@/components/form/input/Input";
import SelectDropdown from "@/components/form/select/Select";
import Container from "@/components/skeleton/container/Container";
import { FormProvider, useForm } from "react-hook-form";

const ReceiveCrypto = () => {
  const methods = useForm();
  const onSubmit = (data: any) => {
    console.log("data: ", data);
  };

  return (
    <Container>
      <main className="flex flex-col items-center pb-[4rem] gap-y-32 ">
        <section className="flex flex-col items-center gap-6 mb-6  w-full">
          <div className="grid justify-items-center gap-3  ">
            <h1 className="font-bold font-grotesk text-[1.563rem] lg:text-[2.5rem] text-[#FEA106] ">
              Accept Crypto
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
                  name="password"
                  label="Password"
                  type="password"
                  style="w-full md:w-fit flex flex-col gap-y-[1rem]"
                />
              </div>
              <div className="flex justify-center mt-[30px] ">
                <Button
                  btnTitle="Copy"
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
    </Container>
  );
};

export default ReceiveCrypto;
