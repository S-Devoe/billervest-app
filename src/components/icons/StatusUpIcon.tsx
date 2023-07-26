import { IconI } from "@/types";

const StatusUpIcon = ({ scale }: IconI) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={scale ? scale * 57 : 57}
    height={scale ? scale * 57 : 57}
    viewBox="0 0 57 57"
    fill="none"
  >
    <path
      d="M16.34 43.1057V38.1895"
      stroke="white"
      stroke-width="3.5625"
      stroke-linecap="round"
    />
    <path
      d="M28.5 43.1059V33.2734"
      stroke="white"
      stroke-width="3.5625"
      stroke-linecap="round"
    />
    <path
      d="M40.66 43.1045V28.332"
      stroke="white"
      stroke-width="3.5625"
      stroke-linecap="round"
    />
    <path
      d="M40.66 13.8926L39.5675 15.1751C33.5113 22.2526 25.3888 27.2638 16.34 29.5201"
      stroke="white"
      stroke-width="3.5625"
      stroke-linecap="round"
    />
    <path
      d="M33.7013 13.8926H40.66V20.8276"
      stroke="white"
      stroke-width="3.5625"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.375 52.25H35.625C47.5 52.25 52.25 47.5 52.25 35.625V21.375C52.25 9.5 47.5 4.75 35.625 4.75H21.375C9.5 4.75 4.75 9.5 4.75 21.375V35.625C4.75 47.5 9.5 52.25 21.375 52.25Z"
      stroke="white"
      stroke-width="3.5625"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default StatusUpIcon;
