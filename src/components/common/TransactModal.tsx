"use client";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";

import { FC } from "react";

interface Props {
  open: boolean;
  setOpen: () => void;
  icon?: any;
  header: string;
  linkText: string;
  route?: string;
  linkTextColor?: string;
  closeModalWithText?: boolean;
  callback?: () => void;
  hasButton?: boolean;
  buttonStyles?: string;
  buttonText?: string;
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
  callback,
  buttonStyles,
  hasButton,
  buttonText,
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent p-[2rem] lg:p-[4rem] ">
          <div className="flex flex-col gap-2 text-black-btn rounded-3xl md:gap-[20px] items-center justify-center w-full ">
            {icon && <div className="">{icon}</div>}
            <p className="font-grotesk text-[1.875rem] mt-[10px] font-semibold md:text-[2.5rem] text-center  ">
              {header}
            </p>
            {hasButton && callback && (
              <div className="">
                <button
                  className={buttonStyles}
                  onClick={() => {
                    setOpen();
                    callback();
                  }}
                >
                  {buttonText}
                </button>
              </div>
            )}
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
                } text-base `}
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
