import { useAuth } from '../../contexts/auth-context';
import { Link } from 'react-router-dom';
import { navbarLocale } from '../../utils/locale-data';
import { useLocale } from '../../contexts/locale-context';

const NavbarBrand = () => {
    const { token } = useAuth();
    const { locale } = useLocale();

    if (token) {
        return (
            <Link to={'/'} className='text-3xl font-semibold text-baseBlack underline dark:text-baseWhite'>
                {navbarLocale[locale]?.title}
            </Link>
        );
    }

    return (
        <h1 className='text-3xl font-semibold text-baseBlack underline dark:text-baseWhite'>
            {navbarLocale[locale]?.title}
        </h1>
    );
};

export default NavbarBrand;
