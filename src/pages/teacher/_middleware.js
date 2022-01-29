import { NextResponse } from 'next/server';

const teacherValidSlugs = ['about', 'courses'];
const teacherDefaultSlug = 'about';

/* eslint-disable-next-line consistent-return */
const middleware = async (req) => {
    const { slug } = req.page.params;
    const isValidSlug = teacherValidSlugs.includes(slug);

    if (!isValidSlug) {
        return NextResponse.redirect(`/teacher/${teacherDefaultSlug}`);
    }
};

export default middleware;
