import PropTypes from 'prop-types';
import { cn } from '../utils/tailwind-merge';
import { registerLocale } from '../utils/locale-data';
import { loginLocale } from '../utils/locale-data';
import { homeLocale } from '../utils/locale-data';
import { archivedLocale } from '../utils/locale-data';
import { useLocale } from '../contexts/locale-context';

const TitlePage = ({ className, pageTitle }) => {
    const { locale } = useLocale();

    switch (pageTitle) {
        case 'login':
            return (
                <h1
                    className={cn(
                        'text-[26px] font-bold leading-normal text-baseBlack dark:text-baseWhite',
                        className,
                    )}>
                    {loginLocale[locale]?.title}
                </h1>
            );
        case 'register':
            return (
                <h1
                    className={cn(
                        'text-[26px] font-bold leading-normal text-baseBlack dark:text-baseWhite',
                        className,
                    )}>
                    {registerLocale[locale]?.title}
                </h1>
            );
        case 'home':
            return (
                <h1
                    className={cn(
                        'text-[26px] font-bold leading-normal text-baseBlack dark:text-baseWhite',
                        className,
                    )}>
                    {homeLocale[locale]?.title}
                </h1>
            );
        case 'archived':
            return (
                <h1
                    className={cn(
                        'text-[26px] font-bold leading-normal text-baseBlack dark:text-baseWhite',
                        className,
                    )}>
                    {archivedLocale[locale]?.title}
                </h1>
            );

        default:
            return (
                <h1
                    className={cn(
                        'text-[26px] font-bold leading-normal text-baseBlack dark:text-baseWhite',
                        className,
                    )}>
                    Wrong Page Title!
                </h1>
            );
    }
};

TitlePage.propTypes = {
    className: PropTypes.string,
    pageTitle: PropTypes.string,
};

export default TitlePage;
