"use client";

import { FC } from "react";

interface Props {
  children: any;
}

const Container: FC<Props> = ({ children }) => {
  return <section className="max-width w-full">{children}</section>;
};
export default Container;
