import { MdGTranslate } from 'react-icons/md';
import { useLocale } from '../../contexts/locale-context';

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

export default Language;
