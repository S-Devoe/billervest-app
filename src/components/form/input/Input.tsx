"use client";

import { FC, useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

interface Props {
  name: string;
  label?: string;
  style?: string;
  inputStyle?: string;
  labelStyle?: string;
  type?: string;
  placeholder?: string;
}

const Input: FC<Props> = ({
  name,
  label,
  style = "flex flex-col gap-[16px] ",
  inputStyle,
  type = "text",
  labelStyle = "font-semibold font-grotesk text-[20px]",
  placeholder,
}) => {
  const [showPwd, setShowPwd] = useState<boolean>(false);

  return (
    <div className={style}>
      <label htmlFor={name} className={labelStyle}>
        {label}
      </label>
      <>
        {type !== "password" ? (
          <input
            type={type}
            placeholder={placeholder}
            className={` ${inputStyle} border-[1.75px] rounded-[6px] p-2 h-[60px] border-white  `}
          />
        ) : (
          <div
            className={`${inputStyle} flex items-center gap-3 focus-within:border-[1.8px] border-[1.75px] rounded-[6px] p-2 h-[60px] border-white`}
          >
            <input
              type={showPwd ? "text" : "password"}
              placeholder={placeholder}
              className={` w-full h-full border-none outline-none  `}
            />
            <div
              role="button"
              onClick={() => setShowPwd((prev) => !prev)}
              className=" "
            >
              {showPwd ? <AiOutlineEyeInvisible size={25} /> : <AiOutlineEye size={25} />}
            </div>
          </div>
        )}
      </>
    </div>
  );
};
export default Input;
