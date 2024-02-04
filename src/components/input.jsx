import { forwardRef } from "react";
import { cn } from "../utils/tailwind-merge";
import Proptypes from "prop-types";

const Input = forwardRef(function Input({ className, type, ...props }, ref) {
    return <input {...props} ref={ref} type={type} className={cn(className)} />;
});

export default Input;

Input.propTypes = {
    className: Proptypes.string,
    type: Proptypes.string,
};
