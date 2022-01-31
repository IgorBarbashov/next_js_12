import dayjs from 'dayjs';
import { TStringOrNumber } from '~types';

export const daysToNow = (date: string, addMeasure = true): TStringOrNumber => {
    const diff = Math.abs(dayjs(date).diff(dayjs(), 'days'));
    const measure = diff > 1 ? 'days' : 'day';
    return addMeasure ? `${diff} ${measure}` : diff;
};

export const monthsToNow = (date: string, addMeasure = true): TStringOrNumber => {
    const diff = Math.abs(dayjs(date).diff(dayjs(), 'months'));
    const measure = diff > 1 ? 'months' : 'month';
    return addMeasure ? `${diff} ${measure}` : diff;
};

export const formatDate = (date: string, format: string): string => dayjs(date).format(format);
