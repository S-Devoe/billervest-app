"use client";

import { SvgProps } from "@/types";
import { FC } from "react";

const ArrowLeft: FC<SvgProps> = (props) => {
  return (
    <svg
      width="17"
      height="31"
      viewBox="0 0 17 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.8142 29.4562L3.24412 17.8861C1.87771 16.5197 1.87771 14.2838 3.24412 12.9174L14.8142 1.34729"
        stroke={props.strokeColor || "white"}
        strokeWidth={props.strokeWidth || "2.66183"}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default ArrowLeft;
