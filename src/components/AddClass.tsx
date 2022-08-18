import { Dialog, Transition } from "@headlessui/react";
import { ClockIcon, ExclamationCircleIcon } from "@heroicons/react/solid";
import { Fragment, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  classCode: string;
  instructor: string;
  starts: string;
  ends: string;
  days: string[];
};

type AddTaskProps = {
  onTaskCreated: () => void;
};

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const AddTask = () => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    reset();
    console.log(data);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none"
      >
        Add Class
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
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
              <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
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
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
              >
                <div>
                  <div className="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full">
                    <ClockIcon
                      className="w-6 h-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-center text-gray-900"
                    ></Dialog.Title>
                    <div>
                      <div>
                        <label
                          htmlFor="classCode"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Class Code
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                          <input
                            type="text"
                            className={
                              errors.classCode
                                ? "w-full rounded-lg border border-red-500 px-4 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                : "w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            }
                            {...register("classCode", {
                              required: {
                                value: true,
                                message: "Class Code is required",
                              },
                            })}
                          />
                          {errors.classCode && (
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                              <ExclamationCircleIcon
                                className="w-5 h-5 text-red-500"
                                aria-hidden="true"
                              />
                            </div>
                          )}
                        </div>
                        <p className="mt-2 text-sm text-red-600">
                          {errors.classCode && errors.classCode.message}
                        </p>
                      </div>

                      <div className="mt-5">
                        <label
                          htmlFor="instructor"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Instructor
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                          <input
                            type="text"
                            className={
                              errors.instructor
                                ? "w-full rounded-lg border border-red-500 px-4 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                : "w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            }
                            {...register("instructor", {
                              required: {
                                value: true,
                                message: "Instructor is required",
                              },
                            })}
                          />
                          {errors.instructor && (
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                              <ExclamationCircleIcon
                                className="w-5 h-5 text-red-500"
                                aria-hidden="true"
                              />
                            </div>
                          )}
                        </div>
                        <p className="mt-2 text-sm text-red-600">
                          {errors.instructor && errors.instructor.message}
                        </p>
                      </div>

                      <div className="flex flex-row justify-between mt-5 space-x-3">
                        <div className="w-full">
                          <label
                            htmlFor="instructor"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Starts
                          </label>
                          <div className="relative mt-2 rounded-md shadow-sm">
                            <select
                              className={
                                errors.instructor
                                  ? "w-full rounded-lg border border-red-500 px-4 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                  : "w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                              }
                              {...register("instructor", {
                                required: {
                                  value: true,
                                  message: "Starts is required",
                                },
                              })}
                            >
                              <option>6:00</option>
                            </select>
                            {errors.instructor && (
                              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <ExclamationCircleIcon
                                  className="w-5 h-5 mr-2 text-red-500"
                                  aria-hidden="true"
                                />
                              </div>
                            )}
                          </div>
                          <p className="mt-2 text-sm text-red-600">
                            {errors.instructor && errors.instructor.message}
                          </p>
                        </div>
                        <div className="w-full">
                          <label
                            htmlFor="instructor"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Ends
                          </label>
                          <div className="relative mt-2 rounded-md shadow-sm">
                            <select
                              className={
                                errors.instructor
                                  ? "w-full rounded-lg border border-red-500 px-4 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                  : "w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                              }
                              {...register("instructor", {
                                required: {
                                  value: true,
                                  message: "Instructor is required",
                                },
                              })}
                            >
                              <option>6:00</option>
                            </select>
                            {errors.instructor && (
                              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <ExclamationCircleIcon
                                  className="w-5 h-5 mr-2 text-red-500"
                                  aria-hidden="true"
                                />
                              </div>
                            )}
                          </div>
                          <p className="mt-2 text-sm text-red-600">
                            {errors.instructor && errors.instructor.message}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col justify-between mt-5">
                        {days?.map((day, index) => (
                          <div key={index} className="relative mt-2">
                            <input
                              type="checkbox"
                              {...register("instructor", {
                                required: {
                                  value: true,
                                  message: "Instructor is required",
                                },
                              })}
                            />
                            <label className="ml-4 text-sm font-medium text-gray-700 ">
                              {day}
                            </label>
                          </div>
                        ))}
                      </div>

                      <div></div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 sm:mt-5 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-green-500 border border-transparent rounded-md shadow-sm hover:bg-green-600 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Add
                  </button>
                  <a
                    onClick={() => {
                      reset();
                      setOpen(false);
                    }}
                    className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </a>
                </div>
              </form>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default AddTask;

