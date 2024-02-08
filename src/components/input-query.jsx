import { useQueryInput } from "../hooks";
import { cn } from "../utils/tailwind-merge";
import PropTypes from "prop-types";
// import Input from "./input";

import { Input } from "./input";

const InputQuery = ({ ref, type, query, className, ...props }) => {
    const { keywordQueryInput, handleQueryInputOnChange } = useQueryInput(query);

    return (
        <Input
            {...props}
            ref={ref}
            type={type}
            className={cn("text-[18px] border-2 h-[43px] w-full rounded-[8px] px-[8px] font-semibold", className)}
            value={keywordQueryInput}
            onChange={handleQueryInputOnChange}
        />
    );
};

export default InputQuery;

InputQuery.propTypes = {
    query: PropTypes.string,
    className: PropTypes.string,
    ref: PropTypes.string,
    type: PropTypes.string,
};
