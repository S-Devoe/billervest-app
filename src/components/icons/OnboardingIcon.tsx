import { IconI } from "@/types";

const OnboardingIcon = ({ scale }: IconI) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={scale ? scale * 53 : 53}
      height={scale ? scale * 53 : 53}
      viewBox="0 0 53 53"
      fill="none"
    >
      <path
        d="M28.5318 4.99L42.9081 12.7413C44.5864 13.6467 44.5864 16.2304 42.9081 17.1358L28.5318 24.8871C27.251 25.5717 25.7493 25.5717 24.4685 24.8871L10.0922 17.1358C8.41391 16.2304 8.41391 13.6467 10.0922 12.7413L24.4685 4.99C25.7493 4.30542 27.251 4.30542 28.5318 4.99Z"
        stroke="white"
        stroke-width="3.3125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.97192 22.3703L21.3323 29.0615C22.9886 29.9007 24.0486 31.6011 24.0486 33.4561V46.0878C24.0486 47.9207 22.1273 49.0911 20.4932 48.274L7.13275 41.5828C5.4765 40.7436 4.4165 39.0432 4.4165 37.1882V24.5565C4.4165 22.7236 6.33775 21.5532 7.97192 22.3703Z"
        stroke="white"
        stroke-width="3.3125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M45.0278 22.3703L31.6674 29.0615C30.0112 29.9007 28.9512 31.6011 28.9512 33.4561V46.0878C28.9512 47.9207 30.8724 49.0911 32.5066 48.274L45.867 41.5828C47.5233 40.7436 48.5833 39.0432 48.5833 37.1882V24.5565C48.5833 22.7236 46.662 21.5532 45.0278 22.3703Z"
        stroke="white"
        stroke-width="3.3125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default OnboardingIcon;
