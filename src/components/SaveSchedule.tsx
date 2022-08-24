import { ButtonProps, FormSchedule } from "../types";
import { useSelector } from "react-redux";
import { server } from "../../config";
import { toast } from "react-toastify";
import Spinner from "./Spinner";
import { Fragment, useEffect, useRef, useState } from "react";
import { RootState } from "../app/store";
import {
  BookmarkIcon,
  ClockIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/solid";
import { Dialog, Transition } from "@headlessui/react";
import { SubmitHandler, useForm } from "react-hook-form";

const SaveSched = ({ isButton }: ButtonProps) => {
  const scheduleState = useSelector((state: RootState) => state.scheduleState);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchedule>();

  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  useEffect(() => {
    reset({
      name: "",
      isNotify: false,
    });
  }, [reset]);

  const onReset = () => {
    setOpen(false);
    reset();
  };

  const onSubmit: SubmitHandler<FormSchedule> = async (data: FormSchedule) => {
    const name = data.name;
    const isNotify = data.isNotify;

    if (scheduleState.length !== 0) {
      const classes = JSON.stringify(scheduleState);

      const formData: FormSchedule = {
        name,
        isNotify,
        classes,
      };

      console.log(formData);

      setIsLoading(true);
      const response = await fetch(`${server}/api/schedule`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      window.open(`${server}/schedule/${data}`);
      toast.success("Your schedule has been saved.", {
        position: "bottom-right",
      });
      setIsLoading(false);
    } else {
      toast.info("Your schedule is currently empty.", {
        position: "bottom-right",
      });
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {isButton ? (
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="inline-flex items-center px-1 py-1 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 shadow-sm rounded-2xl hover:text-gray-600 focus:outline-none dark:bg-dark dark:text-white"
        >
          <BookmarkIcon className="h-5" />
        </button>
      ) : (
        <button className="block px-4 py-2 text-sm">Save Schedule</button>
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
                className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 dark:bg-dark"
              >
                {/* Title */}
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-gray-100 rounded-full">
                  <ClockIcon
                    className="w-6 h-6 text-gray-600"
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
                    {/* Name*/}
                    <div>
                      <label
                        htmlFor="classCode"
                        className="block text-sm font-medium text-gray-700 dark:text-white"
                      >
                        Schedule Name
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                          type="text"
                          className={
                            errors.name
                              ? "w-full rounded-lg border border-red-600 px-4 py-2 focus:outline-none focus:ring-red-600 focus:border-red-600 sm:text-sm"
                              : "w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                          }
                          {...register("name", {
                            required: {
                              value: true,
                              message: "Provide a schedule name",
                            },
                          })}
                        />
                        {errors.name && (
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <ExclamationCircleIcon
                              className="w-5 h-5 text-red-600"
                              aria-hidden="true"
                            />
                          </div>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-red-600">
                        {errors.name && errors.name.message}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cancel and Save Buttons */}
                <div className="mt-5 sm:mt-5 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={onReset}
                    className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-600 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default SaveSched;
