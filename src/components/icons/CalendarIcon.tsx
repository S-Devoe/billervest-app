"use client";

import { SvgProps } from "@/types";
import { FC } from "react";

const CalendarIcon: FC<SvgProps> = (props) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.334 4.33325V10.8333"
        stroke={props.strokeColor || "white"}
        strokeWidth={props.strokeWidth || "3.25"}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.666 4.33325V10.8333"
        stroke={props.strokeColor || "white"}
        strokeWidth={props.strokeWidth || "3.25"}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.6667 7.58325C41.8817 7.97325 45.5 10.7249 45.5 20.9083V34.2982C45.5 43.2249 43.3333 47.6882 32.5 47.6882H19.5C8.66667 47.6882 6.5 43.2249 6.5 34.2982V20.9083C6.5 10.7249 10.1183 7.99492 17.3333 7.58325H34.6667Z"
        stroke="white"
        strokeWidth={props.strokeWidth || "3.25"}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44.9577 38.1333H7.04102"
        stroke={props.strokeColor || "white"}
        strokeWidth={props.strokeWidth || "3.25"}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.0007 17.875C23.3357 17.875 21.0823 19.3267 21.0823 22.1433C21.0823 23.4867 21.7107 24.505 22.664 25.155C21.3423 25.935 20.584 27.1917 20.584 28.665C20.584 31.3517 22.6423 33.02 26.0007 33.02C29.3373 33.02 31.4173 31.3517 31.4173 28.665C31.4173 27.1917 30.659 25.9133 29.3156 25.155C30.2906 24.4833 30.8973 23.4867 30.8973 22.1433C30.8973 19.3267 28.6657 17.875 26.0007 17.875ZM26.0007 24.0283C24.874 24.0283 24.0507 23.3567 24.0507 22.295C24.0507 21.2117 24.874 20.5833 26.0007 20.5833C27.1273 20.5833 27.9506 21.2117 27.9506 22.295C27.9506 23.3567 27.1273 24.0283 26.0007 24.0283ZM26.0007 30.3333C24.5707 30.3333 23.5307 29.6183 23.5307 28.3183C23.5307 27.0183 24.5707 26.325 26.0007 26.325C27.4307 26.325 28.4707 27.04 28.4707 28.3183C28.4707 29.6183 27.4307 30.3333 26.0007 30.3333Z"
        fill={props.fillColor || "white"}
      />
    </svg>
  );
};
export default CalendarIcon;
