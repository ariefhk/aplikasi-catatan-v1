import { IoMdMoon } from 'react-icons/io';
import { IoSunnyOutline } from 'react-icons/io5';
import { useTheme } from '../../contexts/theme-context';

const DarkMode = () => {
    const { theme, changeTheme } = useTheme();

    switch (theme) {
        case 'light':
            return <IoSunnyOutline onClick={() => changeTheme()} className='h-[30px] w-[30px] cursor-pointer' />;
        case 'dark':
            return <IoMdMoon onClick={() => changeTheme()} className='h-[30px] w-[30px] cursor-pointer' />;

        default:
            return <IoSunnyOutline onClick={() => changeTheme()} className='h-[30px] w-[30px] cursor-pointer' />;
    }
};

export default DarkMode;