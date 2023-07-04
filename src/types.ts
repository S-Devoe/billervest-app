import { StaticImageData } from "next/image";

export interface SvgProps {
  width?: number | string;
  height?: number | string;
  strokeWidth?: string;
  strokeColor?: string;
  fillColor?: string;
  fillOpacity?: string;
}

export interface FooterListI {
  title: string;
  image: StaticImageData;
}

export interface FaqI {
  id: number;
  title: string;
  content: string;
}
