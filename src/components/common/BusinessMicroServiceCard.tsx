import Link from "next/link";
import ArrowRight from "../icons/ArrowRight";

type BusinessMicroServicesCardProps = {
  title: string;
  body?: string;
  path: string;
  idx: number;
};

export const BusinessMicroServiceCard = ({
  title,
  body,
  path,
  idx,
}: BusinessMicroServicesCardProps) => {
  return (
    <div className="flex flex-row gap-y-4 md:gap-y-0 justify-between items-center w-full bg-[#2A2B31] p-6   md:min-h-[8rem] min-h-[6rem] md:rounded-md">
      <div className="">
        <h5 className="font-grotesk text-xl md:text-3xl mb-2">
          {idx}. {title}
        </h5>
        <p className="text-sm md:text-base text-[#808080] pl-4">{body}</p>
      </div>
      <div className="">
        <Link
          href={path}
          className=" w-[2.5rem] h-[2.5rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full border-[#7049F7]  border-2 flex justify-center items-center"
        >
          <ArrowRight width={20} height={20} />
        </Link>
      </div>
    </div>
  );
};
