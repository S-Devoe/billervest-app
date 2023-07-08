"use client";

import { SvgProps } from "@/types";
import { FC } from "react";

const ReceiptIcon: FC<SvgProps> = (props) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M40.3333 11V15.4367C40.3333 18.3334 38.5 20.1667 35.6033 20.1667H29.3333V7.35168C29.3333 5.31668 31.0017 3.66669 33.0367 3.66669C35.035 3.68502 36.8683 4.49168 38.1883 5.81168C39.5083 7.15002 40.3333 8.98335 40.3333 11Z"
        stroke={props.strokeColor || "#292D32" }
        strokeWidth={props.strokeWidth || "2.75"}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.66666 12.8334V38.5C3.66666 40.0217 5.38999 40.8834 6.59999 39.9667L9.73499 37.62C10.4683 37.07 11.495 37.1434 12.155 37.8034L15.1983 40.865C15.9133 41.58 17.0867 41.58 17.8017 40.865L20.8817 37.785C21.5233 37.1434 22.55 37.07 23.265 37.62L26.4 39.9667C27.61 40.865 29.3333 40.0034 29.3333 38.5V7.33335C29.3333 5.31669 30.9833 3.66669 33 3.66669H12.8333H11C5.49999 3.66669 3.66666 6.94835 3.66666 11V12.8334Z"
        stroke={props.strokeColor || "#292D32" }
        strokeWidth={props.strokeWidth || "2.75"}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 23.8517H22"
        stroke={props.strokeColor || "#292D32" }
        strokeWidth={props.strokeWidth || "2.75"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 16.5184H22"
        stroke={props.strokeColor || "#292D32" }
        strokeWidth={props.strokeWidth || "2.75"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9919 23.8333H11.0084"
        stroke={props.strokeColor || "#292D32" }
        strokeWidth={props.strokeWidth || "3.66667" }
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9919 16.5H11.0084"
        stroke={props.strokeColor || "#292D32" }
        strokeWidth={props.strokeWidth || "3.66667" }
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default ReceiptIcon;
