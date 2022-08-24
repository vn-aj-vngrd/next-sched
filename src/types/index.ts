export interface Class {
  id: string;
  classCode: string;
  instructor: string;
  startingRow: number;
  timeRange: number;
  day: string;
  color: string;
}

export interface Schedule {
  scheduleState: Class[];
}

export interface ResponseSchedule {
  scheduleState: {
    id: string;
    code: string;
    classes: string;
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

export interface FormSchedule {
  name: string;
  isNotify: boolean;
  classes?: string;
}

export interface TimeSlot {
  value: number;
  description: string;
}
