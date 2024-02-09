import { cn } from '../utils/tailwind-merge';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Button = forwardRef(function Button({ className, type, children, ...props }, ref) {
    return (
        <button
            {...props}
            ref={ref}
            className={cn(
                'border-baseBlack bg-baseBlack text-baseWhite hover:border-baseBlack  hover:bg-baseWhite hover:text-baseBlack flex h-[53px] w-full items-center justify-center rounded-[8px] border-2 p-[12px] text-[24px] font-bold leading-normal',
                className,
            )}
            type={type}>
            {children}
        </button>
    );
});

export default Button;

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.node,
};
