"use client";

import ReceiptIcon from "../icons/ReceiptIcon";
import Repeaticon from "../icons/RepeatIcon";
import SecurityCardIcon from "../icons/SecurityCardIcon";
import Container from "../skeleton/container/Container";

const ChooseBillerPay = () => {
  return (
    <section className="linear-bg w-screen mt-[100px] grid justify-items-center ">
      <Container>
        <div className="">
          <h2 className="font-grotesk font-semibold text-[30px] md:text-[50px] text-center  ">
            Why Choose Billerpay?
          </h2>
          <div className="grid justify-items-center mt-3 ">
            <p className="text-[19px] md:text-[23px] text-[#ffffff98]  ">
              See why you should start using Billerpay
            </p>

            <div className="flex flex-col md:flex-row  items-center gap-[50px] md:gap-[100px] mt-[50px] ">
              {listArr.map((item) => (
                <div className="flex flex-col items-center " key={item.id}>
                  <div className="border-[1px] border-yellow grid place-content-center p-[19px] h-[120px] w-[120px] rounded-full  ">
                    <div className="bg-white rounded-full h-[90px] grid place-content-center w-[90px] ">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="mt-4 font-grotesk font-[600] text-[20px] md:text-[25px] ">
                    {item.value}
                  </h3>
                </div>
              ))}
            </div>
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
