import Image, { StaticImageData } from "next/image";

type ProductHeaderProps = {
  header: string;
  image: StaticImageData;
};

export const ProductHeader: React.FC<ProductHeaderProps> = ({
  header,
  image,
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-10">
      <h1 className="text-center font-semibold text-4xl font-grotesk md:text-[4rem] ">
        {header}
      </h1>
      {/* <div className=""> */}
      <div className="mt-[20px] md:mt-[50px] h-fit p-6 max-w-[300px] flex items-center aspect-video justify-center bg-white rounded-[16px] md:rounded-[24px]  md:max-w-[500px]  ">
        <Image
          src={image}
          alt="img"
          className=" h-[150px] max-w-[250px] md:h-[165px] md:max-w-[300px]  "
        />
      </div>
      {/* <Image
          src={image}
          alt="img"
          className=" h-[9.375rem] max-w-[15.625rem] md:h-[10.313rem] md:max-w-[18.75rem] mt-5 md:mt-12 "
          sizes="100%"
        /> */}
      {/* </div> */}
    </div>
  );
};
