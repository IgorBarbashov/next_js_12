import * as dayjs from 'dayjs';

export const daysToNow = (date, addMeasure = true) => {
    const diff = Math.abs(dayjs(date).diff(dayjs(), 'days'));
    const measure = diff > 1 ? 'days' : 'day';
    return addMeasure ? `${diff} ${measure}` : diff;
};

export const monthsToNow = (date, addMeasure = true) => {
    const diff = Math.abs(dayjs(date).diff(dayjs(), 'months'));
    const measure = diff > 1 ? 'months' : 'month';
    return addMeasure ? `${diff} ${measure}` : diff;
};

export const formatDate = (date, format) => dayjs(date).format(format);
