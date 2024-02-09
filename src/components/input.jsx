import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../utils/tailwind-merge';
import { useQueryInput } from '../hooks';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Input = forwardRef(({ className, type, ...props }, ref) => {
    return (
        <input
            {...props}
            ref={ref}
            type={type || 'text'}
            className={cn(
                'border-baseBlack text-baseBlack h-[43px] w-full rounded-[8px] border-[3px] p-[8px] text-[18px] leading-normal',
                className,
            )}
        />
    );
});

Input.displayName = 'Input';

Input.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
};

const InputQuery = forwardRef(function InputQuery({ type, query, className, ...props }, ref) {
    const { keywordQueryInput, handleQueryInputOnChange } = useQueryInput(query);

    return (
        <input
            {...props}
            ref={ref}
            type={type || 'text'}
            className={cn(
                'border-baseBlack text-baseBlack h-[43px] w-full rounded-[8px] border-[3px] p-[8px] text-[18px] leading-normal',
                className,
            )}
            value={keywordQueryInput}
            onChange={handleQueryInputOnChange}
        />
    );
});

InputQuery.displayName = 'InputQuery';

InputQuery.propTypes = {
    query: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
};

const PasswordInput = forwardRef(({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(!showPassword);
    return (
        <section className='relative w-full '>
            <input
                {...props}
                ref={ref}
                type={showPassword ? 'text' : 'password'}
                className={cn(
                    'border-baseBlack text-baseBlack h-[43px] w-full rounded-[8px] border-[3px] p-[8px] text-[18px] leading-normal',
                    className,
                )}
            />
            {showPassword ? (
                <FiEye
                    onClick={togglePassword}
                    className={` absolute right-1 top-[50%] mr-3 h-[24px] w-[24px] translate-y-[-50%] cursor-pointer `}
                />
            ) : (
                <FiEyeOff
                    onClick={togglePassword}
                    className={` absolute right-1 top-[50%] mr-3 h-[24px] w-[24px] translate-y-[-50%] cursor-pointer `}
                />
            )}
        </section>
    );
});

PasswordInput.propTypes = {
    className: PropTypes.string,
};
PasswordInput.displayName = 'PasswordInput';

export { Input, PasswordInput, InputQuery };
