import Container from "../skeleton/container/Container";

export const HowToUseBillerPay = () => {
  return (
    <div className="">
      <Container>
        <div className="w-full md:w-[60%] mx-auto ">
          <div className="text-center mb-12">
            <h2 className="font-grotesk text-3xl mb-2 md:text-[2.875rem] font-bold text-[#FEA106]">
              How to use Billerpay
            </h2>
            <p className="text-[#808080] md:text-lg">
              Our Payment APIs are simple to use , fast and affordable.{" "}
            </p>
          </div>
          <div className="text-center mb-6">
            <p className="md:text-lg text-[#808080]">
              An all-in-one mobile app designed to simplify and streamline bill
              payments across various sectors. Billerpay is a versatile platform
              that allows users to conveniently and securely handle a wide range
              of transactions, including mobile top-ups, flight bookings,
              e-commerce purchases, and gaming credits. With its user-friendly
              interface and robust features, Billerpay revolutionizes the way
              individuals manage their finances and transactions.
            </p>
          </div>
          <div className="text-center">
            <button className="bg-[#7049F7] rounded-full font-grotesk py-4 px-16 text-white font-semibold">
              Proceed
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};
