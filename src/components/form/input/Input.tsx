"use client";

import { FC } from "react";

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
  inputStyle = "border-[1.5px] rounded-[6px] p-2 h-[60px] border-[#7049F7] ",
  type = "text",
  labelStyle = "font-semibold text-[20px]",
  placeholder,
}) => {
  return (
    <div className={style}>
      <label htmlFor={name} className={labelStyle}>
        {label}
      </label>
      <input type={type} placeholder={placeholder} className={inputStyle} />
    </div>
  );
};
export default Input;
