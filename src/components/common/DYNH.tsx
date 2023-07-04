"usw client";

import Link from "next/link";

const DYNH = () => {
  return (
    <div className="flex items-center justify-between gap-[24px]  ">
      <h3 className=" font-semibold text-[40px] ">Do you need help?</h3>
      <div className="">
        <p className=" font-normal text-[20px]  " >
          Support is just few steps away, your questions are ready to be
          answered.
        </p>
        <Link href="#" className="font-semibold text-[20px] underline underline-offset-[3px] " >Get help</Link>
      </div>
    </div>
  );
};
export default DYNH;
