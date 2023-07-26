"use client";

import ReceiptIcon from "../icons/ReceiptIcon";
import Repeaticon from "../icons/RepeatIcon";
import SecurityCardIcon from "../icons/SecurityCardIcon";
import Container from "../skeleton/container/Container";

const ChooseBillerPay = () => {
  return (
    <section className="linear-bg w-full mt-24 grid justify-items-center py-16 ">
      <Container>
        <div className="flex flex-col justify-center items-center gap-y-16">
          <div className="flex justify-center flex-col gap-y-5 items-center">
            <h2 className="font-grotesk font-semibold text-3xl  md:text-[3.688rem] text-center  ">
              Why Choose Billerpay?
            </h2>
            <p className="text-base md:text-xl text-[#fff] text-opacity-60  ">
              See why you should start using Billerpay
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:justify-evenly w-full gap-y-8 md:gap-y-0 ">
            {listArr.map((item) => (
              <div className="flex flex-col items-center " key={item.id}>
                <div className="border-[1px] border-yellow grid place-content-center p-5 h-[7.875rem] w-[7.875rem] rounded-full  ">
                  <div className="bg-white rounded-full h-[5.5rem] grid place-content-center w-[5.5rem] ">
                    {item.icon}
                  </div>
                </div>
                <h3 className="mt-4 font-grotesk font-[600] text-lg md:text-2xl ">
                  {item.value}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
export default ChooseBillerPay;

const listArr = [
  {
    id: 0,
    value: "Bills Payment",
    icon: <ReceiptIcon />,
  },
  {
    id: 1,
    value: "Zero Exchange fee",
    icon: <Repeaticon />,
  },
  {
    id: 2,
    value: "Cashless Policy",
    icon: <SecurityCardIcon />,
  },
];
