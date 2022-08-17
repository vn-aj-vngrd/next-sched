import { ItemProps } from "../src/types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewClass } from "../src/features/schedule/scheduleSlice";
import { RootState } from "../src/app/store";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormValues } from "../src/types";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

const LeftItem = (props: ItemProps) => {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(setNewClass(data));

    // console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col mb-32 space-y-5 md:w-1/4 "
    >
      {/* Title */}
      <div>
        <h2 className="flex justify-center font-bold text-lg md:justify-start">
          Add a Class
        </h2>
      </div>

      {/* Class Code */}
      <div className="md:justify-start">
        <input
          {...register("classCode")}
          type="text"
          className="w-[17rem] rounded-lg border border-gray-300 px-4 py-2 focus:border-gray-500 focus:outline-none"
          placeholder="Class Code"
        />
      </div>
      {/* Instructor */}
      <div className="md:justify-start">
        <input
          {...register("instructor")}
          type="text"
          className="w-[17rem] rounded-lg border border-gray-300 px-4 py-2 focus:border-gray-500 focus:outline-none"
          placeholder="Instructor"
        />
      </div>
      {/* Starts and Ends */}
      <div className="flex space-x-6 md:justify-start">
        <div>
          <select
            {...register("starts")}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none"
            placeholder="Instructor"
          >
            <option value="">Starts</option>
            {props.timeSlots?.map((time, index) => (
              <option key={index} value={time}>
                {}
                {time}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            {...register("ends")}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none"
            placeholder="Instructor"
          >
            <option value="">Ends</option>
            {props.timeSlots?.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Day Checkbox */}
      <div className="justify-center md:justify-start">
        {props.days?.map((day, index) => (
          <div key={index}>
            <input
              {...register("days")}
              type="checkbox"
              value={day}
              className="py-2 mr-4 border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none"
            />
            <label>{day}</label>
          </div>
        ))}
      </div>
      {/* Add Btn */}
      <div className="text-center md:text-start">
        <button
          type="submit"
          className="px-5 py-2 text-white bg-black rounded-lg hover:bg-gray-800"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default LeftItem;
