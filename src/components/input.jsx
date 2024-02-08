import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../utils/tailwind-merge';
import { useQueryInput } from '../hooks';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Input = forwardRef(function Input({ className, type, ...props }, ref) {
    return <input {...props} ref={ref} type={type} className={cn(className)} />;
});

Input.displayName = 'Input';

Input.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    ref: PropTypes.string,
};

const InputQuery = ({ ref, type, query, className, ...props }) => {
    const { keywordQueryInput, handleQueryInputOnChange } = useQueryInput(query);

    return (
        <Input
            {...props}
            ref={ref}
            type={type}
            className={cn('h-[43px] w-full rounded-[8px] border-2 px-[8px] text-[18px] font-semibold', className)}
            value={keywordQueryInput}
            onChange={handleQueryInputOnChange}
        />
    );
};

InputQuery.displayName = 'InputQuery';

InputQuery.propTypes = {
    query: PropTypes.string,
    className: PropTypes.string,
    ref: PropTypes.string,
    type: PropTypes.string,
};

const PasswordInput = ({ ref, className, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(!showPassword);
    return (
        <section className='relative w-full'>
            <Input {...props} ref={ref} type={showPassword ? 'text' : 'password'} className={cn('w-full', className)} />;
            {showPassword ? (
                <FiEye
                    onClick={togglePassword}
                    className={` absolute right-1 top-[50%] mr-3 h-[20px] w-[20px] translate-y-[-50%] cursor-pointer `}
                />
            ) : (
                <FiEyeOff
                    onClick={togglePassword}
                    className={` absolute right-1 top-[50%] mr-3 h-[20px] w-[20px] translate-y-[-50%] cursor-pointer `}
                />
            )}
        </section>
    );
};

PasswordInput.displayName = 'PasswordInput';

PasswordInput.propTypes = {
    className: PropTypes.string,
    ref: PropTypes.string,
};

export { Input, InputQuery, PasswordInput };
