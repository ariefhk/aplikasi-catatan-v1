import { cn } from '../utils/tailwind-merge';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Button = forwardRef(function Button({ className, type, children, ...props }, ref) {
    return (
        <button
            {...props}
            ref={ref}
            className={cn(
                'flex h-[53px] w-full   items-center justify-center rounded-[8px] border-2 border-baseBlack bg-baseBlack p-[12px] text-[24px] font-bold leading-normal text-baseWhite',
                className,
            )}
            type={type}>
            {children}
        </button>
    );
});

// hover:border-baseBlack  hover:bg-baseWhite hover:text-baseBlack

export default Button;

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.node,
};
