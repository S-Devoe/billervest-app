"use client";

import { FC } from "react";

interface Props {
  children: any;
}

const Container: FC<Props> = ({ children }) => {
  return (
    <section className="w-[90%] md:w-[85%] mx-auto h-full ">{children}</section>
  );
};
export default Container;
