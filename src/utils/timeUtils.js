import * as dayjs from 'dayjs';

export const daysToNow = (date) => Math.abs(dayjs(date).diff(dayjs(), 'days'));
