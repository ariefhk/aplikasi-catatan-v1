import PropTypes from 'prop-types';
import { cn } from '../utils/tailwind-merge';

const DefaultLayout = ({ className, children }) => {
    return (
        <main className={cn('h-screen w-screen overflow-x-hidden bg-baseWhite dark:bg-black', className)}>
            {children}
        </main>
    );
};

export default DefaultLayout;

DefaultLayout.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
