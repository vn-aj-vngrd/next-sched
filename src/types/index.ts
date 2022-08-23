export interface Class {
  classCode: string;
  instructor: string;
  startingRow: number;
  timeRange: number;
  className: string;
  color: string;
}

export interface Schedule {
  userSchedule: Class[];
}

export interface ResponseSchedule {
  userSchedule: {
    id: string;
    classes: Class[];
  };
}

export interface ButtonProps {
  isButton: boolean;
}

export interface FormClass {
  classCode: string;
  instructor: string;
  starts: number;
  ends: number;
  isDay?: boolean;
  isThemeColor?: boolean;
}

export interface TimeSlot {
  value: number;
  description: string;
}
