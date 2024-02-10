import { Link } from 'react-router-dom';
import { useLocale } from '../../contexts/locale-context';
import { useAuth } from '../../contexts/auth-context';

const ArchivedButton = () => {
    const { locale } = useLocale();
    const { token } = useAuth();

    if (token) {
        return (
            <Link
                className='text-[18px] font-medium leading-normal text-baseBlack dark:text-baseWhite'
                to={'/archives'}>
                {locale === 'id' ? 'Terarsip' : 'Archived'}
            </Link>
        );
    }
    return false;
};

export default ArchivedButton;
