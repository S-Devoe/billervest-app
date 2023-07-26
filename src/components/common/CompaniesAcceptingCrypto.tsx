"use client";
import { businessCompanies } from "@/constants/data";
import Container from "../skeleton/container/Container";
import Image from "next/image";

export const CompaniesAcceptingCrypto = () => {
  return (
    <section className="linear-bg w-full mt-24  justify-items-center py-16 min-h-[28.125rem] ">
      <Container>
        <div className="flex flex-col  items-center gap-y-20  h-full ">
          <div className="flex justify-center flex-col gap-y-5 items-center">
            <h2 className="font-grotesk font-semibold text-3xl  md:text-[2.875rem] text-center  ">
              Companies accepting crypto payments
            </h2>
          </div>
          <div className="flex flex-wrap flex-row md:justify-evenly w-full gap-6 md:gap-0 ">
            {businessCompanies.map((item) => (
              <div className="h-24  md:h-32 flex-shrink-0" key={item.id}>
                <Image
                  src={item.image}
                  alt="logo"
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
