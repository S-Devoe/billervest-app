import { CompaniesAcceptingCrypto } from "@/components/common/CompaniesAcceptingCrypto";
import { HowToUseBillerPay } from "@/components/common/HowToUseBillerPay";
import { WhyBillerPay } from "@/components/common/WhyBillerPay";
import Button from "@/components/form/Buttons/Button";
import Container from "@/components/skeleton/container/Container";

const BillerPayDocs = () => {
  return (
    <main className="flex gap-y-6 flex-col">
      <Container>
        <section className="min-h-[25rem] flex md:text-center flex-col justify-center items-center mb-20 ">
          <h1 className=" text-4xl md:text-[4.5rem] mb-2 font-grotesk md:leading-[5.563rem] font-semibold">
            Accept{" "}
            <span className="text-[#FEA106]">cryptocurrency payments</span>{" "}
            <br className="hidden md:inline" /> from all over the world.
          </h1>
          <p className="text-[#808080] text-sm md:text-lg mb-12">
            Accept Bitcoin and other cryptocurrencies, gain new customers, and
            avoid the cost of high fees and chargebacks
          </p>
          <div className="flex justify-center items-center gap-x-8">
            <Button
              btnTitle="Get Started"
              borderRadius="rounded-full"
              width="min-w-[15.625rem]  !px-6 "
              textStyle="md:text-lg  font-semibold"
            />
            <Button
              btnTitle="Read Docs"
              borderRadius="rounded-full"
              width="min-w-[15.625rem]  !px-6 bg-transparent border border-[#808080] "
              textStyle="md:text-lg  font-semibold"
            />
          </div>
        </section>
      </Container>
      <div className="flex flex-col gap-y-8">
        <Container>
          <WhyBillerPay />
        </Container>
        <CompaniesAcceptingCrypto />
        <HowToUseBillerPay />
      </div>
    </main>
  );
};

export default BillerPayDocs;
