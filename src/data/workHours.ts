export interface WorkDay {
  day: string;
  hours: string;
  isWeekend: boolean;
}

export const workHours: WorkDay[] = [
  { day: 'Monday',    hours: '9:00 AM – 5:00 PM', isWeekend: false },
  { day: 'Tuesday',   hours: '9:00 AM – 5:00 PM', isWeekend: false },
  { day: 'Wednesday', hours: '9:00 AM – 5:00 PM', isWeekend: false },
  { day: 'Thursday',  hours: '9:00 AM – 5:00 PM', isWeekend: false },
  { day: 'Friday',    hours: '9:00 AM – 5:00 PM', isWeekend: false },
  { day: 'Saturday',  hours: '1:00 PM – 8:00 PM', isWeekend: true  },
  { day: 'Sunday',    hours: '10:00 AM – 4:00 PM', isWeekend: true },
];
