import { Link } from 'react-router-dom';
import { navbarLocale } from '../utils/locale-data';
import { useLocale } from '../contexts/locale-context';
import { useAuth } from '../contexts/auth-context';
import { IoLogOutOutline } from 'react-icons/io5';
import { MdGTranslate } from 'react-icons/md';
import { IoMdMoon } from 'react-icons/io';
import { IoSunnyOutline } from 'react-icons/io5';
import { useTheme } from '../contexts/theme-context';
import { useGetUserLogged } from '../networks/auth';

const ArchivedButton = () => {
    const { locale } = useLocale();
    const { token } = useAuth();

    if (token) {
        return (
            <Link
                className='text-[18px] font-medium leading-normal text-baseBlack dark:text-baseWhite'
                to={'/archives'}>
                {navbarLocale[locale]?.archive}
            </Link>
        );
    }
    return false;
};

ArchivedButton.displayName = 'ArchivedButton';

const Logout = () => {
    const { deleteToken, token } = useAuth();

    if (token) {
        return (
            <IoLogOutOutline
                className='h-[30px] w-[30px] cursor-pointer text-baseBlack dark:text-baseWhite'
                onClick={() => deleteToken()}
            />
        );
    }

    return false;
};

Logout.displayName = 'Logout';

const Language = () => {
    const { changeLocale } = useLocale();

    return (
        <MdGTranslate
            onClick={() => {
                changeLocale();
            }}
            className='h-[30px] w-[30px] cursor-pointer text-baseBlack dark:text-baseWhite '
        />
    );
};

Language.displayName = 'Language';

const DarkMode = () => {
    const { theme, changeTheme } = useTheme();

    switch (theme) {
        case 'light':
            return (
                <IoSunnyOutline
                    onClick={() => changeTheme()}
                    className='h-[30px] w-[30px] cursor-pointer text-baseBlack dark:text-baseWhite'
                />
            );
        case 'dark':
            return (
                <IoMdMoon
                    onClick={() => changeTheme()}
                    className='h-[30px] w-[30px] cursor-pointer text-baseBlack dark:text-baseWhite'
                />
            );

        default:
            return (
                <IoSunnyOutline
                    onClick={() => changeTheme()}
                    className='h-[30px] w-[30px] cursor-pointer text-baseBlack dark:text-baseWhite'
                />
            );
    }
};

DarkMode.displayName = 'DarkMode';

const LoggedUser = () => {
    const { token } = useAuth();
    const { locale } = useLocale();
    const { data, isLoading } = useGetUserLogged(token);

    if (token) {
        if (isLoading) {
            return (
                <h1 className='text-[18px] font-medium leading-normal text-baseBlack dark:text-baseWhite'>
                    {navbarLocale[locale].fetching_user}
                </h1>
            );
        }

        return (
            <h1 className='text-[18px] font-medium leading-normal text-baseBlack dark:text-baseWhite'>
                {data?.data?.name}
            </h1>
        );
    }

    return false;
};

LoggedUser.displayName = 'LoggedUser';

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

NavbarBrand.displayName = 'NavbarBrand';

const Navbar = () => {
    return (
        <section className='fixed top-0 z-20 h-[60px] w-screen border-b border-baseBlack bg-baseWhite dark:border-baseWhite dark:bg-black'>
            <nav className='mx-auto flex h-full max-w-screen-xl  items-center justify-between'>
                <NavbarBrand />
                <div className='flex items-center  gap-x-[30px]'>
                    <ArchivedButton />
                    <Logout />
                    <Language />
                    <DarkMode />
                    <LoggedUser />
                </div>
            </nav>
        </section>
    );
};

Navbar.displayName = 'Navbar';

export { Navbar };
