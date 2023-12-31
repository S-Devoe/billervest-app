import { IconI } from "@/types";

const PaymentIcon = ({ scale }: IconI) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={scale ? scale * 59 : 59}
    height={scale ? scale * 59 : 59}
    viewBox="0 0 59 59"
    fill="none"
  >
    <path
      d="M43.845 33.1812C42.8475 34.155 42.2775 35.5562 42.42 37.0525C42.6338 39.6175 44.985 41.4937 47.55 41.4937H52.0625V44.32C52.0625 49.2362 48.0488 53.25 43.1325 53.25H19.1213C19.8575 52.6325 20.4987 51.8725 20.9975 51.0175C21.8762 49.5925 22.375 47.9062 22.375 46.125C22.375 40.8762 18.1238 36.625 12.875 36.625C10.6425 36.625 8.57625 37.4088 6.9375 38.715V28.3363C6.9375 23.42 10.9512 19.4062 15.8675 19.4062H43.1325C48.0488 19.4062 52.0625 23.42 52.0625 28.3363V31.7563H47.265C45.935 31.7563 44.7237 32.2787 43.845 33.1812Z"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.9375 30.4729V19.6192C6.9375 16.793 8.67124 14.2754 11.3075 13.2779L30.165 6.15289C33.11 5.03664 36.2688 7.22171 36.2688 10.3805V19.4054"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M54.5772 34.1783V39.0709C54.5772 40.3771 53.5322 41.4458 52.2022 41.4933H47.5472C44.9822 41.4933 42.6309 39.6171 42.4172 37.0521C42.2747 35.5558 42.8447 34.1546 43.8422 33.1808C44.7209 32.2783 45.9322 31.7559 47.2622 31.7559H52.2022C53.5322 31.8034 54.5772 32.872 54.5772 34.1783Z"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.625 29.5H34.25"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.375 46.125C22.375 47.9062 21.8762 49.5925 20.9975 51.0175C20.4987 51.8725 19.8575 52.6325 19.1213 53.25C17.4588 54.7462 15.2737 55.625 12.875 55.625C9.4075 55.625 6.39125 53.7725 4.7525 51.0175C3.87375 49.5925 3.375 47.9062 3.375 46.125C3.375 43.1325 4.7525 40.4488 6.9375 38.715C8.57625 37.4088 10.6425 36.625 12.875 36.625C18.1238 36.625 22.375 40.8762 22.375 46.125Z"
      stroke="white"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.17334 46.1243L11.5246 48.4756L16.5833 43.7969"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    {/* <rect x="0.5" y="0.5" width="58" height="58" stroke="white" /> */}
  </svg>
);

export default PaymentIcon;
