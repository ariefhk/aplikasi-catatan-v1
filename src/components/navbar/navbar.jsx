import DarkMode from './dark-mode';
import Logout from './logout';
import LoggedUser from './logged-user';
import Language from './language';
import NavbarBrand from './navbar-brand';
import ArchivedButton from './archived-button';

const Navbar = () => {
    console.log('render navbar');

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

export default Navbar;
