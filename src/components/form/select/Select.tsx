"use client";
import { ComponentPropsWithoutRef, FC } from "react";
import { useFormContext, Controller } from "react-hook-form";
import Select from "react-select";

interface Props {
  options: { id: number | string; value: string; label: string }[];
  name: string;
  required?: boolean;
  className?: string;
  label: string;
  labelStyle?: string;
  style?: string;
}

const SelectDropdown: FC<Props> = ({
  options,
  name,
  required,
  className,
  style = "flex flex-col gap-y-[1rem] md:w-fit w-full ",
  label,
  labelStyle = "font-semibold font-grotesk  text-base md:text-[1.25rem]",
  ...props
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={style}>
      <label htmlFor={name} className={labelStyle}>
        {label}
      </label>
      <Controller
        control={control}
        rules={{
          required: true || "This field is required",
        }}
        name={name}
        render={({ field: { onChange, value, ref } }) => (
          <Select
            styles={{
              // @ts-ignore
              control: (baseStyles, state) => ({
                ...baseStyles,
                border: state.isFocused ? 0 : 0,
                boxShadow: state.isFocused ? 0 : 0,
                "&:hover": {
                  border: state.isFocused ? 0 : 0,
                },
              }),
            }}
            className={`Select ${className} h-12 md:h-[4.063rem] rounded-md `}
            ref={ref}
            // menuIsOpen
            components={{
              IndicatorSeparator: () => null,
            }}
            classNamePrefix="select"
            options={options}
            value={options.find((c) => c.value === value)}
            onChange={(val) => onChange(val!.value)}
            {...props}
          />
        )}
      />
    </div>
  );
};
export default SelectDropdown;
