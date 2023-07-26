"use client";
import CalendarIcon from "@/components/icons/CalendarIcon";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { FC, forwardRef } from "react";
import DatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";

dayjs.extend(advancedFormat);

interface DateProps {
  name: string;
  state?: string;
  required?: boolean;
  label?: string;
  labelStyle?: string;
  style?: string;
}

const CustomDatePicker: FC<DateProps> = ({
  name,
  style = "flex flex-col gap-[16px] ",
  required = false,
  labelStyle = "font-semibold font-grotesk text-[20px]",
  label,
}) => {
  // const [startDate, setStartDate] = useState(new Date());
  const {
    control,
    formState: { errors },
  } = useForm<any>();

  return (
    <div className={style}>
      <label htmlFor={name} className={labelStyle}>
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        rules={{
          required: required || "This field is required",
        }}
        render={({ field: { value = new Date(), onChange } }) => (
          <DatePicker
            // selected={startDate}
            // onChange={(date: Date) => setStartDate(date)}
            selected={value}
            onChange={onChange}
            customInput={<CustomInput />}
          />
        )}
      />
      {errors[name] && (
        <p className="text-yellow text-[15px] mt-3 ">{`${errors[name]?.message}`}</p>
      )}
    </div>
  );
};
export default CustomDatePicker;

const CustomInput = forwardRef<HTMLButtonElement, any>(
  ({ value, onClick, onChange }, ref) => {
    console.log(value);
    return (
      <>
        <button
          className="input-style date-button border-[1.75px] rounded-[6px] p-2 h-[60px] border-grey-text  flex items-center justify-between "
          onClick={onClick}
          type="button"
          ref={ref}
        >
          <p className="">{dayjs(value).format("Do MMMM, YYYY")}</p>
          <span className="pl-3 border-l-[1.75px]  border-grey-text">
            <CalendarIcon />
          </span>
        </button>
      </>
    );
  }
);

CustomInput.displayName = "CustomInput";
