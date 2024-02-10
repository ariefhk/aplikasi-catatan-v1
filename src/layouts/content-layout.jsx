import { cn } from '../utils/tailwind-merge';
import PropTypes from 'prop-types';

const ContentLayout = ({ className, children }) => {
    return (
        <section
            className={cn('mx-auto flex h-full max-w-screen-lg flex-col gap-y-[20px] pb-[20px] pt-[100px]', className)}>
            {children}
        </section>
    );
};

export default ContentLayout;

ContentLayout.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};
