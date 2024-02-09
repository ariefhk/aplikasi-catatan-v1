import { Link } from 'react-router-dom';
import { useLocale } from '../../contexts/locale-context';

const ArchivedButton = () => {
    const { locale } = useLocale();

    console.log({ locale });

    return (
        <Link className='text-[18px] font-medium leading-normal' to={'/archives'}>
            {locale === 'id' ? 'Terarsip' : 'Archived'}
        </Link>
    );
};

export default ArchivedButton;
