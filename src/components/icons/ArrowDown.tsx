"use client";

import { SvgProps } from "@/types";
import { FC } from "react";

const ArrowDown: FC<SvgProps> = (props) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.99977 8.9C5.64977 8.9 5.29977 8.765 5.03477 8.5L1.77477 5.24C1.62977 5.095 1.62977 4.855 1.77477 4.71C1.91977 4.565 2.15977 4.565 2.30477 4.71L5.56477 7.97C5.80477 8.21 6.19477 8.21 6.43477 7.97L9.69477 4.71C9.83977 4.565 10.0798 4.565 10.2248 4.71C10.3698 4.855 10.3698 5.095 10.2248 5.24L6.96477 8.5C6.69977 8.765 6.34977 8.9 5.99977 8.9Z"
        fill={props.fillColor || "white"}
      />
    </svg>
  );
};
export default ArrowDown;
