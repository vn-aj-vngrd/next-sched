export interface Class {
  id: string;
  classCode: string;
  instructor: string;
  startingRow: number;
  endingRow: number;
  day: number;
  color: string;
}

export interface Schedule {
  scheduleState: Class[];
}

export interface Title {
  titleState: string;
}

export interface ResponseSchedule {
  scheduleState: {
    id: string;
    name: string;
    code: string;
    classes: string;
  };
}

export interface ButtonProps {
  isButton?: boolean;
}

export interface TimeSlotProps {
  repeatValue: number;
  timeRange: string[];
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

export interface ClassesProps {
  scheduleState: Class[];
  gridTemplateRows: number;
}