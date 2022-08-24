import { Dialog, Transition } from "@headlessui/react";
import { ClockIcon, ExclamationCircleIcon } from "@heroicons/react/solid";
import { Fragment, useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setScheduleState } from "../app/features/scheduleSlice";
import { SwatchesPicker } from "react-color";
import { colors } from "../colors/colors";
import { ButtonProps, FormClass, TimeSlot } from "../types";
import { generateTimeSlot } from "../helpers";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const AddClass = ({ isButton }: ButtonProps) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    clearErrors,
    setError,
    watch,
    formState: { errors },
  } = useForm<FormClass>(); //{ mode: "all" }

  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  const [swatchesPickerColor, setSwatchesPickerColor] = useState<
    string | undefined
  >("");
  const [isSchedError, setIsSchedError] = useState<boolean>(false);

  const [days, setDays] = useState<number[]>([]);
  const [daySlots] = useState([
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]);
  const [timeSlots] = useState<TimeSlot[]>(generateTimeSlot());

  useEffect(() => {
    reset({
      classCode: "",
      instructor: "",
      starts: 6,
      ends: 6,
      isDay: false,
      isThemeColor: false,
    });
  }, [reset]);

  const onReset = () => {
    setOpen(false);
    setSwatchesPickerColor(undefined);
    setDays([]);
    setIsSchedError(false);
    reset();
  };

  const onSubmit: SubmitHandler<FormClass> = (data) => {
    days.forEach((day) => {
      const formData = {
        id: uuidv4(),
        classCode: data.classCode,
        instructor: data.instructor,
        startingRow: (data.starts - 6) * 6 + 2,
        timeRange: (data.ends - data.starts) * 6,
        day: "col-start-" + day,
        color: swatchesPickerColor,
      };

      dispatch(setScheduleState(formData));
    });
    toast.success(`A class was added successfully.`, {
      position: "bottom-right",
    });

    onReset();
  };

  return (
    <>
      {isButton ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-600 focus:outline-none"
        >
          Add
        </button>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="block px-4 py-2 text-sm"
        >
          Add New Class
        </button>
      )}

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              {/* Form */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
              >
                {/* Title */}
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-blue-100 rounded-full">
                  <ClockIcon
                    className="w-6 h-6 text-blue-600"
                    aria-hidden="true"
                  />
                </div>

                <div className="mt-3 sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-center text-gray-900"
                  ></Dialog.Title>
                  {/* Inputs */}
                  <div>
                    {/* Class Code */}
                    <div>
                      <label
                        htmlFor="classCode"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Class Code / Course Name
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                          type="text"
                          className={
                            errors.classCode
                              ? "w-full rounded-lg border border-red-600 px-4 py-2 focus:outline-none focus:ring-red-600 focus:border-red-600 sm:text-sm"
                              : "w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                          }
                          {...register("classCode", {
                            required: {
                              value: true,
                              message: "Provide a class code",
                            },
                          })}
                        />
                        {errors.classCode && (
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <ExclamationCircleIcon
                              className="w-5 h-5 text-red-600"
                              aria-hidden="true"
                            />
                          </div>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-red-600">
                        {errors.classCode && errors.classCode.message}
                      </p>
                    </div>

                    {/* Instructor */}
                    <div className="mt-5">
                      <label
                        htmlFor="instructor"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Instructor / Teacher
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                          type="text"
                          className={
                            errors.instructor
                              ? "w-full rounded-lg border border-red-600 px-4 py-2 focus:outline-none focus:ring-red-600 focus:border-red-600 sm:text-sm"
                              : "w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                          }
                          {...register("instructor", {
                            required: {
                              value: true,
                              message: "Provide an instructor",
                            },
                          })}
                        />
                        {errors.instructor && (
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <ExclamationCircleIcon
                              className="w-5 h-5 text-red-600"
                              aria-hidden="true"
                            />
                          </div>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-red-600">
                        {errors.instructor && errors.instructor.message}
                      </p>
                    </div>

                    {/* Starts and Ends */}
                    <div className="flex flex-row justify-between mt-5 space-x-3">
                      <div className="w-full">
                        <label
                          htmlFor="starts"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Starts
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                          <select
                            className={
                              errors.starts
                                ? "w-full rounded-lg border border-red-600 px-4 py-2 focus:outline-none focus:ring-red-600 focus:border-red-600 sm:text-sm"
                                : "w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                            }
                            {...register("starts", {
                              required: {
                                value: true,
                                message: "Class starts is required",
                              },
                              // validate: (value) =>
                              //   Number(watch("ends")) > value ||
                              //   "Starts must be before ends",
                            })}
                          >
                            {timeSlots?.map((time, index) => (
                              <option key={index} value={time.value}>
                                {time.description}
                              </option>
                            ))}
                          </select>
                          {errors.starts && (
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                              <ExclamationCircleIcon
                                className="w-5 h-5 mr-2 text-red-600"
                                aria-hidden="true"
                              />
                            </div>
                          )}
                        </div>
                        <p className="mt-2 text-sm text-red-600">
                          {errors.starts && errors.starts.message}
                        </p>
                      </div>
                      <div className="w-full">
                        <label
                          htmlFor="ends"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Ends
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                          <select
                            className={
                              errors.ends
                                ? "w-full rounded-lg border border-red-600 px-4 py-2 focus:outline-none focus:ring-red-600 focus:border-red-600 sm:text-sm"
                                : "w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                            }
                            {...register("ends", {
                              required: {
                                value: true,
                                message: "Class ends is required",
                              },
                              validate: (value) =>
                                Number(watch("starts")) < value ||
                                "Ends must be after starts",
                            })}
                          >
                            {timeSlots?.map((time, index) => (
                              <option key={index} value={time.value}>
                                {time.description}
                              </option>
                            ))}
                          </select>
                          {errors.ends && (
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                              <ExclamationCircleIcon
                                className="w-5 h-5 mr-2 text-red-600"
                                aria-hidden="true"
                              />
                            </div>
                          )}
                        </div>
                        <p className="mt-2 text-sm text-red-600">
                          {errors.ends && errors.ends.message}
                        </p>
                      </div>
                    </div>

                    {/* Days */}
                    <div className="mt-5">
                      <label
                        htmlFor="day"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Day of Class
                      </label>
                      <div className="flex flex-col gap-2 mt-2 md:grid-cols-4 md:grid">
                        <input
                          type="hidden"
                          className="border-4 border-indigo-600/100"
                          {...register("isDay", {
                            required: {
                              value: true,
                              message: "Select day/s",
                            },
                          })}
                        />
                        {daySlots?.map((daySlot, index) => (
                          <div key={index}>
                            <input
                              type="checkbox"
                              onChange={(event) => {
                                if (event.target.checked) {
                                  clearErrors("isDay");
                                  setDays([...days, index + 1]);
                                  setValue("isDay", true);
                                  return;
                                }
                                setDays(
                                  days.filter((day) => day !== index + 1)
                                );

                                if (days.length === 1) {
                                  setError("isDay", {
                                    type: "custom",
                                    message: "Select day/s",
                                  });
                                  setValue("isDay", undefined);
                                }
                              }}
                              className="border-4 border-indigo-600/100"
                            />
                            <label
                              htmlFor={`days.${index}.value`}
                              className="ml-2 text-sm text-gray-700"
                            >
                              {daySlot}
                            </label>
                          </div>
                        ))}
                      </div>
                      <p className="flex mt-2 text-sm text-red-600 ">
                        {errors.isDay && errors.isDay.message}
                      </p>
                    </div>

                    {/* Color */}
                    <div className="mt-5">
                      <label
                        htmlFor="classCode"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Theme Color
                      </label>
                      <input
                        type="hidden"
                        {...register("isThemeColor", {
                          required: {
                            value: true,
                            message: "Select theme color",
                          },
                        })}
                      />
                      <div className="flex justify-center w-full mx-auto mt-2 text-center align-center">
                        <SwatchesPicker
                          className="picker"
                          color={swatchesPickerColor}
                          colors={colors}
                          onChange={(color) => {
                            clearErrors("isThemeColor");
                            setSwatchesPickerColor(color.hex);
                            setValue("isThemeColor", true);
                          }}
                          width={1024}
                          height={126}
                        />
                      </div>
                      <p className="flex mt-2 text-sm text-red-600 ">
                        {errors.isThemeColor && errors.isThemeColor.message}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cancel and Add Buttons */}
                <div className="mt-5 sm:mt-5 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    onClick={onReset}
                    className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-600 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>

                  {isSchedError && (
                    <p className="inline-flex justify-center w-full px-4 py-2 mt-3 text-sm text-red-600 sm:ml-3 sm:w-auto sm:mt-0">
                      Sorry, schedule already exists.
                    </p>
                  )}
                </div>
              </form>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default AddClass;
