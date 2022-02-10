import { i18n } from 'next-i18next';
import dayjs from 'dayjs';
import { TStringOrNumber } from '~types';

export const daysToNow = (date: string, addMeasure = true): TStringOrNumber => {
    const diff = Math.abs(dayjs(date).diff(dayjs(), 'days'));
    const measure = i18n?.t(diff > 1 ? 'common:days' : 'common:day') || '';
    return addMeasure ? `${diff} ${measure}` : diff;
};

export const monthsToNow = (date: string, addMeasure = true): TStringOrNumber => {
    const diff = Math.abs(dayjs(date).diff(dayjs(), 'months'));
    const measure = i18n?.t(diff > 1 ? 'common:months' : 'common:month') || '';
    return addMeasure ? `${diff} ${measure}` : diff;
};

export const formatDate = (date: string, format: string): string => dayjs(date).format(format);
