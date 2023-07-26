"use client";

import { FC, useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { useForm } from "react-hook-form";

interface Props {
  name: string;
  label?: string;
  style?: string;
  inputStyle?: string;
  labelStyle?: string;
  type?: string;
  placeholder?: string;
  rules?: {};
  required?: boolean;
}

const Input: FC<Props> = ({
  name,
  label,
  style = "flex flex-col gap-y-[1rem]",
  inputStyle,
  type = "text",
  labelStyle = "font-semibold font-grotesk  text-base md:text-[1.25rem]",
  placeholder,
  rules,
  required,
}) => {
  const [showPwd, setShowPwd] = useState<boolean>(false);

  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className={style}>
      <label htmlFor={name} className={labelStyle}>
        {label}
      </label>
      <>
        {type !== "password" ? (
          <div>
            <input
              {...register(name, {
                required: required && "This field is required!",
                validate: {
                  ...rules,
                },
              })}
              type={type}
              placeholder={placeholder}
              className={` ${inputStyle} border-[1.75px] rounded-md p-2  h-12 md:h-[4.063rem] border-white  `}
            />
            {errors[name] && (
              <p className="text-yellow text-[0.938rem] mt-3 ">{`${errors[name]?.message}`}</p>
            )}
          </div>
        ) : (
          <>
            <div
              className={`${inputStyle} flex items-center gap-3 focus-within:border-[1.8px] border-[1.75px] rounded-md p-2  h-12 md:h-[4.063rem] border-white`}
            >
              <input
                {...register(name, {
                  required: required && "This field is required",
                  ...rules,
                })}
                type={showPwd ? "text" : "password"}
                placeholder={placeholder}
                className={` w-full h-full border-none outline-none  `}
              />
              <div
                role="button"
                onClick={() => setShowPwd((prev) => !prev)}
                className=" "
              >
                {showPwd ? (
                  <AiOutlineEyeInvisible size={25} />
                ) : (
                  <AiOutlineEye size={25} />
                )}
              </div>
            </div>
            {errors[name] && (
              <p className="text-yellow text-[15px] mt-3 ">{`${errors[name]?.message}`}</p>
            )}
          </>
        )}
      </>
    </div>
  );
};
export default Input;
