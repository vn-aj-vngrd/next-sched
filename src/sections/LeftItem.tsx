import React from "react";

const LeftItem = () => {
  const timeRange = [
    "6:00 AM",
    "6:30 AM",
    "7:00 AM",
    "7:30 AM",
    "8:00 AM",
    "8:30 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
  ];

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="flex flex-col mb-32 space-y-6 md:w-1/4">
      <div>
        <h3 className="flex justify-center font-semibold md:justify-start">
          Add a New Class
        </h3>
      </div>
      <div className="flex justify-center space-x-5 md:justify-start">
        <input
          type="text"
          className="w-[17rem] rounded-lg border border-gray-300 px-4 py-2 focus:border-gray-500 focus:outline-none"
          placeholder="Class Code"
        />
      </div>
      <div className="flex justify-center space-x-5 md:justify-start">
        <input
          type="text"
          className="w-[17rem] rounded-lg border border-gray-300 px-4 py-2 focus:border-gray-500 focus:outline-none"
          placeholder="Instructor"
        />
      </div>
      <div className="flex space-x-6 md:justify-start">
        <div>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none"
            placeholder="Instructor"
          >
            <option value="">Starts</option>
            {timeRange?.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none"
            placeholder="Instructor"
          >
            <option value="">Ends</option>
            {timeRange?.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col justify-center md:justify-start">
        {days.map((day, index) => (
          <div key={index}>
            <input
              type="checkbox"
              className="py-2 mr-4 border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none"
            />
            <label>{day}</label>
          </div>
        ))}
      </div>
      <div className="flex justify-center md:justify-start">
        <button className="px-5 py-2 text-white bg-black rounded-lg hover:bg-gray-800">
          Add
        </button>
      </div>
    </div>
  );
};

export default LeftItem;
