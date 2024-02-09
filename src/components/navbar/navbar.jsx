import DarkMode from './dark-mode';
import Logout from './logout';
import LoggedUser from './logged-user';
import Language from './language';
import NavbarBrand from './navbar-brand';

const Navbar = () => {
    console.log('render navbar');

    return (
        <section className='fixed top-0 z-20 h-[60px] w-screen border-b border-black bg-white '>
            <nav className='mx-auto flex h-full max-w-screen-xl  items-center justify-between'>
                <NavbarBrand />
                <div className='flex items-center  gap-x-[30px]'>
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
