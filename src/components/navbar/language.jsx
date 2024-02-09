import { MdGTranslate } from 'react-icons/md';
import { useTheme } from '../../contexts/theme-context';

const Language = () => {
    const { changeLocale } = useTheme();

    return (
        <MdGTranslate
            onClick={() => {
                changeLocale();
            }}
            className='h-[30px] w-[30px] cursor-pointer '
        />
    );
};

export default Language;
