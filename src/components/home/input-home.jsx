import { cn } from "../../utils/tailwind-merge";
import PropTypes from "prop-types";
import { useQueryInput } from "../../hooks";

const InputHome = ({ className }) => {
    const { keywordQueryInput, handleQueryInputOnChange } = useQueryInput("keyword");

    return (
        <input
            type="text"
            className={cn("text-[18px] border-2 h-[43px] w-full rounded-[8px] px-[8px] font-semibold", className)}
            value={keywordQueryInput}
            onChange={handleQueryInputOnChange}
        />
    );
};

export default InputHome;

InputHome.propTypes = {
    className: PropTypes.string,
};
