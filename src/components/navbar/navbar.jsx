import { MdGTranslate } from 'react-icons/md';
import DarkMode from './dark-mode';
import Logout from './logout';

const Navbar = () => {
    console.log('render navbar');

    return (
        <section className='fixed top-0 z-20 h-[60px] w-screen border-b border-black bg-white '>
            <nav className='mx-auto flex h-full max-w-screen-xl  items-center justify-between'>
                <h1 className='text-3xl font-semibold underline'>Aplikasi Catatan</h1>
                <div className='flex items-center  gap-x-[30px]'>
                    <Logout />
                    <MdGTranslate className='h-[30px] w-[30px] cursor-pointer' />
                    <DarkMode />
                </div>
            </nav>
        </section>
    );
};

export default Navbar;
