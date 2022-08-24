import { TimeSlot } from "../types";

export const generateTimeSlot = () => {
  let data: TimeSlot[] = [];
  let meridiem = "AM";
  let hr = 1;
  for (let i = 6, j = 6; i < 21; i++) {
    meridiem = i == 12 ? "PM" : meridiem;
    hr = i > 12 ? i - 12 : i;
    data.push({
      value: j++,
      description: hr + ":00 " + meridiem,
    });
    data.push({
      value: j++,
      description: hr + ":30 " + meridiem,
    });
  }
  return data;
};
