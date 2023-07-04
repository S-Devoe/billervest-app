"use client";

import Button from "../form/Buttons/Button";
import Input from "../form/input/Input";
import ArrowDown from "../icons/ArrowDown";

const Exchange = () => {
  return (
    <form className="flex flex-col  " >
      <div className="mt-4">
        <h3 className="font-semibold text-[20px] mb-[16px] ">Enter amount</h3>
        <div className="flex items-center gap-[20px]  ">
          <input
            type="number"
            placeholder="$50"
            className="border-[1px] border-[#7049F7] rounded-[5px] p-[8px] h-[55px] w-[200px] "
          />
          <div className="font-source font-[400] text-[20px] flex flex-col items-center cursor-pointer ">
            <h4>Estimated price</h4>
            <div className="flex gap-4 items-center  ">
              <h4>0.0 BTC</h4>
              <ArrowDown height={15} width={15} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Input name="exchange" label="Enter receiver’s Phone number" />
      </div>
      <div className="mt-8 self-center">
        <Button type="submit" btnTitle="Proceed" width="w-full md:w-[200px] " />
      </div>
    </form>
  );
};
export default Exchange;
