import { FC, ReactElement } from 'react';
import { TeacherHeaderElement } from '~elements/teacher/header';
import { TeacherTabsElement } from '~elements/teacher/tabs';
import { TeacherTabContentElement } from '~elements/teacher/tabContent';

export const TeacherComponent: FC = (): ReactElement => (
    <>
        <TeacherHeaderElement />
        <TeacherTabsElement />
        <TeacherTabContentElement />
    </>
);
