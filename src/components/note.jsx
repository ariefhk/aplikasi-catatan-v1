import { reformatDate } from '../utils/format-date';
import PropTypes from 'prop-types';
import { useLocale } from '../contexts/locale-context';
import { useNavigate } from 'react-router-dom';
import { formatDotString } from '../utils/string';

const LoadingNote = () => {
    return <h1 className='text-[64px] font-bold leading-normal text-baseBlack'>Sedang memuat catatan...</h1>;
};

LoadingNote.displayName = 'LoadingNote';

const ErrorNote = () => {
    return <h1 className='text-[64px] font-bold leading-normal text-baseBlack'>Gagal memuat catatan...</h1>;
};

ErrorNote.displayName = 'ErrorNote';

const SuccessNote = ({ title, createdAt, body }) => {
    const { locale } = useLocale();

    return (
        <div className='flex-grow overflow-y-auto'>
            <h1 className=' text-[64px] font-bold leading-normal text-baseBlack dark:text-baseWhite'>{title}</h1>
            <p className='  text-[16px] leading-normal text-[#6d6d6d] dark:text-baseWhite'>
                {reformatDate(createdAt, locale)}
            </p>
            <p className='pt-[36px] text-[18px] leading-[27px] text-baseBlack dark:text-baseWhite'>{body}</p>
        </div>
    );
};

SuccessNote.displayName = 'SuccessNote';

SuccessNote.propTypes = {
    title: PropTypes.string,
    createdAt: PropTypes.string,
    body: PropTypes.string,
};

const LoadingListNote = () => {
    const { locale } = useLocale();
    return (
        <h1 className='text-baseBlack dark:text-baseWhite'>
            {locale === 'en' ? 'Loading notes ...' : 'Sedang memuat catatan ...'}
        </h1>
    );
};

LoadingListNote.displayName = 'LoadingListNote';

const ErrorListNote = () => {
    const { locale } = useLocale();
    return <h1 className='text-baseBlack dark:text-baseWhite'> {locale === 'en' ? 'Error!' : 'Gagal!'}</h1>;
};

ErrorListNote.displayName = 'ErrorListNote';

const SucccesListNote = ({ notes }) => {
    const navigate = useNavigate();
    const { locale } = useLocale();

    if (notes?.length === 0) {
        return (
            <h1 className='text-baseBlack dark:text-baseWhite'>
                {locale === 'en' ? 'Not found!' : 'Tidak ditemukan!'}
            </h1>
        );
    }
    return notes.map((note) => (
        <div
            onClick={() => navigate(`/notes/${note?.id}`)}
            key={note?.id}
            className='h-[220px] cursor-pointer overflow-x-hidden rounded-lg p-[10px] outline outline-2 outline-baseBlack hover:outline-4 dark:outline-baseWhite '>
            <h1 className='text-[18px] font-bold leading-normal text-baseBlack dark:text-baseWhite'>
                {formatDotString(note?.title, 60)}
            </h1>
            <p className='mt-[4px] text-[12px] leading-normal text-twoBlack dark:text-baseWhite'>
                {reformatDate(note?.createdAt, locale)}
            </p>
            <p className='mt-[16px] text-[16px] leading-normal text-baseBlack dark:text-baseWhite'>
                {formatDotString(note?.body, 100)}
            </p>
        </div>
    ));
};

SucccesListNote.displayName = 'SucccesListNote';

SucccesListNote.propTypes = {
    notes: PropTypes.array,
};

export { LoadingNote, ErrorNote, SuccessNote, LoadingListNote, ErrorListNote, SucccesListNote };
