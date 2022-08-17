export type ItemProps = {
  timeSlots?: string[];
  days: string[];
};

export type FormValues = {
  classCode: string;
  instructor: string;
  starts: number;
  ends: number;
  days: string[];
};

export type ScheduleType = {
  classCode: string;
  instructor: string;
  starts: number;
  ends: number;
  days: string[];
};

export type ScheduleState = {
  schedules: ScheduleType[];
};

export type AddClassProps = {
  isOpen: boolean;
};
