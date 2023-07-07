"use client";

import { SvgProps } from "@/types";
import { FC } from "react";

const ArrowRight: FC<SvgProps> = (props) => {
  return (
    <svg
      width="43"
      height="43"
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.9894 7.34737L27.5595 18.9175C28.9259 20.2839 28.9259 22.5198 27.5595 23.8862L15.9894 35.4563"
        stroke={props.strokeColor || "white"}
        strokeWidth={props.strokeWidth || "2.66183"}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default ArrowRight;
