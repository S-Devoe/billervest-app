"use client";

import { FC } from "react";

interface Props {
  btnTitle: string;
  bgColor?: string;
  width?: string;
  height?: string;
  paddingInline?: string;
  paddingBlock?: string;
  borderRadius?: string;
  textStyle?: string;
  styles?: string;
  onClick?: () => void;
  type?: | "button" | 'submit'| "reset";
}

const Button: FC<Props> = ({
  btnTitle,
  width = "w-full",
  height = "h-fit",
  bgColor = "bg-purple",
  paddingInline = "px-[16px]",
  paddingBlock = "py-[16px]",
  textStyle = "text-[20px] font-[400] ",
  borderRadius = "rounded-[6px]",
  styles,
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`${width} ${height} ${bgColor} ${styles}
      ${paddingInline} ${paddingBlock} ${textStyle} ${borderRadius} `}
      onClick={onClick}
    >
      {btnTitle}
    </button>
  );
};
export default Button;
