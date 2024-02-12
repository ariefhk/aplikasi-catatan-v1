import { useGetNotes } from '../../networks/note';
import PropTypes from 'prop-types';
import { cn } from '../../utils/tailwind-merge';
import { useQueryUtil } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { reformatDate } from '../../utils/format-date';
import { formatDotString } from '../../utils/string';
import { useLocale } from '../../contexts/locale-context';

const ListNotes = ({ className }) => {
    const { debounceKeywordQuery } = useQueryUtil('keyword', 300);
    const navigate = useNavigate();
    const { locale } = useLocale();

    const {
        data: notes,
        isLoading: loadingNotes,
        isSuccess: successFetchNotes,
        isError: errorFetchNotes,
    } = useGetNotes(debounceKeywordQuery);

    return (
        <section className={cn('grid flex-grow grid-cols-2 gap-[12px] overflow-y-auto p-1 md:grid-cols-4', className)}>
            {loadingNotes && (
                <h1 className='text-baseBlack dark:text-baseWhite'>
                    {locale === 'en' ? 'Loading notes ...' : 'Sedang memuat catatan ...'}
                </h1>
            )}
            {errorFetchNotes && (
                <h1 className='text-baseBlack dark:text-baseWhite'> {locale === 'en' ? 'Error!' : 'Gagal!'}</h1>
            )}
            {successFetchNotes && notes.length === 0 && (
                <h1 className='text-baseBlack dark:text-baseWhite'>
                    {locale === 'en' ? 'Not found!' : 'Tidak ditemukan!'}
                </h1>
            )}
            {successFetchNotes &&
                notes.length > 0 &&
                notes.map((note) => {
                    return (
                        <div
                            onClick={() => navigate(`/notes/${note?.id}`)}
                            key={note?.id}
                            className='h-[220px] cursor-pointer overflow-x-hidden rounded-lg p-[10px] outline outline-2 outline-baseBlack hover:outline-4 dark:outline-baseWhite '>
                            <h1 className='text-[18px] font-bold leading-normal text-baseBlack dark:text-baseWhite'>
                                {formatDotString(note?.title, 60)}
                            </h1>
                            <p className='text-twoBlack mt-[4px] text-[12px] leading-normal dark:text-baseWhite'>
                                {reformatDate(note?.createdAt, locale)}
                            </p>
                            <p className='mt-[16px] text-[16px] leading-normal text-baseBlack dark:text-baseWhite'>
                                {formatDotString(note?.body, 100)}
                            </p>
                        </div>
                    );
                })}
        </section>
    );
};

export default ListNotes;

ListNotes.propTypes = {
    className: PropTypes.string,
};
