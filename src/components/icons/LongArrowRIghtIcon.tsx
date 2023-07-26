import { IconI } from "@/types";

const LongArrowRightIcon = ({ scale }: IconI) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={scale ? scale * 24 : 24}
    height={scale ? scale * 25 : 25}
    viewBox="0 0 24 25"
    fill="none"
  >
    <path
      d="M14.4297 6.79102L20.4997 12.861L14.4297 18.931"
      stroke="#FEA106"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.5 12.8613H20.33"
      stroke="#FEA106"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default LongArrowRightIcon;
