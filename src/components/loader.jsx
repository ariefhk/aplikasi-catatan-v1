import PropTypes from 'prop-types';
import { cn } from '../utils/tailwind-merge';

const Loader = ({ className }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className={cn('h-[32px] w-[32px] animate-spin text-baseWhite dark:text-baseBlack', className)}>
            <path d='M21 12a9 9 0 1 1-6.219-8.56' />
        </svg>
    );
};

export default Loader;

Loader.propTypes = {
    className: PropTypes.string,
};
