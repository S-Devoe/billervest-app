import { IconI } from "@/types";

const WalletIcon = ({ scale }: IconI) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={scale ? scale * 53 : 53}
    height={scale ? scale * 53 : 53}
    viewBox="0 0 53 53"
    fill="none"
  >
    <path
      d="M48.5837 26.5007V37.5423C48.5837 44.1673 44.167 48.584 37.542 48.584H15.4587C8.83366 48.584 4.41699 44.1673 4.41699 37.5423V26.5007C4.41699 20.494 8.03866 16.2981 13.6699 15.5915C14.2441 15.5031 14.8403 15.459 15.4587 15.459H37.542C38.1162 15.459 38.6682 15.481 39.1982 15.5694C44.8957 16.2319 48.5837 20.4498 48.5837 26.5007Z"
      stroke="white"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M39.2012 15.5681C38.6712 15.4798 38.1191 15.4577 37.5449 15.4577H15.4616C14.8433 15.4577 14.247 15.5019 13.6729 15.5902C13.982 14.9719 14.4237 14.3977 14.9537 13.8677L22.1308 6.66852C25.1562 3.66518 30.0587 3.66518 33.0841 6.66852L36.9487 10.5773C38.362 11.9686 39.1128 13.7352 39.2012 15.5681Z"
      stroke="white"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M48.5837 27.6035H41.9587C39.5295 27.6035 37.542 29.591 37.542 32.0202C37.542 34.4493 39.5295 36.4368 41.9587 36.4368H48.5837"
      stroke="white"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default WalletIcon;
