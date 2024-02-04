import { cn } from "../utils/tailwind-merge";
import { forwardRef } from "react";
import PropTypes from "prop-types";

const Button = forwardRef(function Button({ className, type, children, ...props }, ref) {
    return (
        <button ref={ref} {...props} className={cn(className)} type={type}>
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
