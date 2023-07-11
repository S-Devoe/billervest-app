"use client";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";

import { FC } from "react";

interface Props {
  open: boolean;
  setOpen: () => void;
  icon: any;
  header: string;
  linkText: string;
  route?: string;
  linkTextColor?: string;
  closeModalWithText?: boolean;
}

const TransactModal: FC<Props> = ({
  open,
  setOpen,
  icon,
  header,
  linkText,
  route,
  linkTextColor,
  closeModalWithText,
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent p-[18px] lg:p-[50px] ">
          <div className="flex flex-col gap-2 text-black-btn rounded-[25px] md:gap-[20px] items-center justify-center w-full ">
            <div className="">{icon}</div>
            <p className="font-grotesk text-[30px] mt-[10px] font-semibold md:text-[40px] text-center  ">
              {header}
            </p>
            {closeModalWithText ? (
              <p
                role="button"
                onClick={setOpen}
                className={`mt-[30px] underline ${
                  linkTextColor ? linkTextColor : "text-grey-text"
                } text-[16px] `}
              >
                {linkText}
              </p>
            ) : (
              <Link
                href={`${route}`}
                className={`mt-[30px] underline ${
                  linkTextColor ? linkTextColor : "text-grey-text"
                } text-[16px] `}
              >
                {linkText}
              </Link>
            )}
          </div>

          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default TransactModal;
