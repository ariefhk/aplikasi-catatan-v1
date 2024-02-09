import React from 'react';
import { cn } from '../utils/tailwind-merge';
import PropTypes from 'prop-types';

const ContentLayout = ({ className, children }) => {
    return (
        <section
            className={cn(
                'mx-auto mt-[60px] flex h-full max-w-screen-lg flex-col gap-y-[20px] px-[20px] pb-[80px]  pt-[40px] md:px-0',
                className,
            )}>
            {children}
        </section>
    );
};

export default ContentLayout;

ContentLayout.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};
