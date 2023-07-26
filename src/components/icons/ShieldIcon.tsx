import { IconI } from "@/types";

export const ShieldIcon = ({ scale }: IconI) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={scale ? scale * 53 : 53}
      height={scale ? scale * 53 : 53}
      viewBox="0 0 53 53"
      fill="none"
    >
      <path
        d="M13.25 22.0827V17.666C13.25 10.3564 15.4583 4.41602 26.5 4.41602C37.5417 4.41602 39.75 10.3564 39.75 17.666V22.0827"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M26.5003 40.8542C29.5494 40.8542 32.0212 38.3824 32.0212 35.3333C32.0212 32.2843 29.5494 29.8125 26.5003 29.8125C23.4513 29.8125 20.9795 32.2843 20.9795 35.3333C20.9795 38.3824 23.4513 40.8542 26.5003 40.8542Z"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M37.542 48.584H15.4587C6.62533 48.584 4.41699 46.3757 4.41699 37.5423V33.1257C4.41699 24.2923 6.62533 22.084 15.4587 22.084H37.542C46.3753 22.084 48.5837 24.2923 48.5837 33.1257V37.5423C48.5837 46.3757 46.3753 48.584 37.542 48.584Z"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
