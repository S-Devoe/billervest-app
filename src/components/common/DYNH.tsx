"usw client";

import Link from "next/link";

const DYNH = () => {
  return (
    <div className="flex flex-col md:flex-row  items-center justify-between gap-4 md:gap-[24px]  ">
      <h3 className=" font-semibold text-[30px] font-grotesk md:font-poppins md:text-[40px] ">
        Do you need help?
      </h3>
      <div className="flex justify-center">
        <p className=" font-normal text-center md:text-start text-[20px]  ">
          Support is just few steps away, your questions are ready to be
          answered.
          <span className="block" >
            <Link
              href="#"
              className="font-semibold text-[20px] underline underline-offset-[3px] "
            >
              Get help
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};
export default DYNH;
