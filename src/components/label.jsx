import { cn } from '../utils/tailwind-merge';
import PropTypes from 'prop-types';

const Label = ({ className, htmlFor, children, ...props }) => {
    return (
        <label {...props} htmlFor={htmlFor} className={cn('text-baseBlack text-[24px] font-light leading-normal', className)}>
            {children}
        </label>
    );
};

export default Label;

Label.propTypes = {
    className: PropTypes.string,
    htmlFor: PropTypes.string,
    children: PropTypes.node,
};
