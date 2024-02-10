import { useAuth } from '../../contexts/auth-context';
import { Link } from 'react-router-dom';

const NavbarBrand = () => {
    const { token } = useAuth();

    if (token) {
        return (
            <Link to={'/'} className='text-3xl font-semibold text-baseBlack underline dark:text-baseWhite'>
                Aplikasi Catatan
            </Link>
        );
    }

    return <h1 className='text-3xl font-semibold text-baseBlack underline dark:text-baseWhite'>Aplikasi Catatan</h1>;
};

export default NavbarBrand;
