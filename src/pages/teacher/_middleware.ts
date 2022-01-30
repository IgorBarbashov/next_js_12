import { NextResponse } from 'next/server';
import { TEACHER_PAGE } from '~constants';

const { VALID_SLUGS, DEFAULT_SLUG } = TEACHER_PAGE;

const middleware = (req) => {
    const { slug } = req.page?.params || {};
    const isValidSlug = VALID_SLUGS.includes(slug);

    if (!isValidSlug) {
        return NextResponse.redirect(`/teacher/${DEFAULT_SLUG}`);
    }
    return NextResponse.next();
};

export default middleware;
