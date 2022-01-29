import { NextResponse } from 'next/server';

const teacherValidSlugs = ['about', 'courses'];
const teacherDefaultSlug = 'about';

const middleware = (req) => {
    const { slug } = req.page?.params || {};
    const isValidSlug = teacherValidSlugs.includes(slug);

    if (!isValidSlug) {
        return NextResponse.redirect(`/teacher/${teacherDefaultSlug}`);
    }
};

export default middleware;
