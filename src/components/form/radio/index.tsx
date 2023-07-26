"use client";

type RadioInputProps = {
  labelText: string;
  id: string;
  name: string;
};

export const RadioInput = ({ labelText, id, name }: RadioInputProps) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="radio"
        name={name}
        className="w-[2.5rem] h-[2.5rem] outline-none text-white bg-[#0EE317] border-gray-300"
      />
      <label
        htmlFor={id}
        className="ml-2 text-lg md:text-[1.25rem]  font-medium text-white font-grotesk"
      >
        {labelText}
      </label>
    </div>
  );
};
