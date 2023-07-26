import { BusinessMicroServiceCard } from "@/components/common/BusinessMicroServiceCard";
import { CompaniesAcceptingCrypto } from "@/components/common/CompaniesAcceptingCrypto";
import { HowToUseBillerPay } from "@/components/common/HowToUseBillerPay";
import { WhyBillerPay } from "@/components/common/WhyBillerPay";
import Button from "@/components/form/Buttons/Button";
import Container from "@/components/skeleton/container/Container";
import { onlinePaymentsData } from "@/constants/data";

const OnlinePayments = () => {
  return (
    <main className="flex gap-y-6 flex-col">
      <Container>
        <section className="min-h-[15rem]  flex md:text-center flex-col justify-center items-center md:mb-12">
          <h1 className=" text-4xl md:text-[4.5rem] mb-2 font-grotesk md:leading-[5.563rem] font-semibold">
            Online <span className="text-[#FEA106]">Payment</span> Systems.
          </h1>
          <p className="text-[#808080] text-sm md:text-lg mb-12">
            Cryptocurrency Payments acceptance for your business on your
            websites
          </p>
        </section>
      </Container>
      <div className="flex flex-col gap-y-8">
        <div className="w-full md:w-[85%] mx-auto mb-14 flex flex-col gap-y-8 ">
          {onlinePaymentsData.map((item, idx) => (
            <BusinessMicroServiceCard {...item} key={item.id} idx={idx + 1} />
          ))}
        </div>
        <Container>
          <WhyBillerPay />
        </Container>
        <CompaniesAcceptingCrypto />
        <HowToUseBillerPay />
      </div>
    </main>
  );
};

export default OnlinePayments;
