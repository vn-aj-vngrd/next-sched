import { ButtonProps, FormSchedule } from "../types";
import { useSelector } from "react-redux";
import { server } from "../../config";
import { toast } from "react-toastify";
import Spinner from "./Spinner";
import { Fragment, useEffect, useRef, useState } from "react";
import { RootState } from "../app/store";
import {
  BookmarkIcon,
  ExclamationCircleIcon,
  XIcon,
} from "@heroicons/react/solid";
import { Dialog, Transition } from "@headlessui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import ReactTooltip from "react-tooltip";

const SaveSched = ({ isButton }: ButtonProps) => {
  const scheduleState = useSelector(
    (state: RootState) => state.scheduleReducer.scheduleState
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchedule>();

  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const [tooltip, showTooltip] = useState(true);

  useEffect(() => {
    reset({
      name: "",
      isNotify: false,
    });
  }, [reset]);

  const onReset = () => {
    setOpen(false);
    showTooltip(false);
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

      setIsLoading(true);
      const response = await fetch(`${server}/api/schedule`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const code = await response.json();
      window.open(`${server}/schedule/${code}`);
      toast.success("Your schedule has been saved.", {
        position: "bottom-right",
      });
      setIsLoading(false);
    } else {
      toast.info("Your schedule is currently empty.", {
        position: "bottom-right",
      });
    }
    onReset();
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {tooltip && <ReactTooltip id="saveSched" effect="float" place="bottom" />}

      {isButton ? (
        <button
          data-for="saveSched"
          data-tip="Save Schedule"
          onMouseLeave={() => {
            showTooltip(false);
            setTimeout(() => showTooltip(true), 50);
          }}
          onClick={() => setOpen(true)}
          type="button"
          className="inline-flex items-center px-1 py-1 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 shadow-sm rounded-2xl hover:text-gray-600 focus:outline-none dark:bg-dark dark:text-white dark:border-transparent dark:hover:text-gray-200"
        >
          <BookmarkIcon className="h-5" />
        </button>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="w-full justify-start flex px-4 py-2 text-sm text-dark dark:text-white"
        >
          Save Schedule
        </button>
      )}

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={() => {
            showTooltip(false);
            setOpen(false);
          }}
        >
          <div className="flex items-center justify-center min-h-screen px-4 text-center sm:block sm:p-0">
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
                className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 dark:bg-darker"
              >
                {/* Title */}
                <div className="flex items-start justify-between p-3 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
                    Save Schedule
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="defaultModal"
                    onClick={onReset}
                  >
                    <XIcon className="w-5 h-5" />
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                <div className="p-3 mt-3">
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
                              : "w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none sm:text-sm dark:border-transparent"
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
                  {/* Notify */}
                  {/* <div className="mt-5">
                    <label
                      htmlFor="default-toggle"
                      className="relative inline-flex items-center"
                    >
                      <input
                        type="checkbox"
                        // id="default-toggle"
                        {...register("isNotify")}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-dark peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      <label
                        htmlFor="notify"
                        className="block ml-3 text-sm font-medium text-gray-700 dark:text-white"
                      >
                        Notifications
                      </label>
                    </label>
                  </div> */}
                </div>
                <hr className="mt-3 dark:border-gray-600" />
                {/* Cancel and Save Buttons */}
                <div className="p-3 mt-3 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Confirm
                  </button>
                  <button
                    type="button"
                    onClick={onReset}
                    className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-600 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm dark:text-white dark:bg-dark dark:border-transparent dark:hover:text-light"
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
