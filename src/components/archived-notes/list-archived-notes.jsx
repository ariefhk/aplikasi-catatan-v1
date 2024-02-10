import PropTypes from 'prop-types';
import { cn } from '../../utils/tailwind-merge';

import { useQueryUtil } from '../../hooks';
import { useGetArchivedNotes } from '../../networks/note';
import { useNavigate } from 'react-router-dom';
import { useLocale } from '../../contexts/locale-context';
import { formatDotString } from '../../utils/string';
import { reformatDate } from '../../utils/format-date';

const ListArchivedNotes = ({ className }) => {
    const { debounceKeywordQuery } = useQueryUtil('keyword', 300);
    const navigate = useNavigate();
    const { locale } = useLocale();
    const {
        data: notes,
        isLoading: loadingNotes,
        isSuccess: successFetchNotes,
        isError: errorFetchNotes,
    } = useGetArchivedNotes(debounceKeywordQuery);

    console.log({
        debounceKeywordQuery,
        notes,
    });

    return (
        <section className={cn('grid flex-grow grid-cols-2 gap-[12px] overflow-y-auto p-2 md:grid-cols-4', className)}>
            {loadingNotes && <h1>Loading notes ...</h1>}
            {errorFetchNotes && <h1>Error! </h1>}
            {successFetchNotes && notes.length === 0 && <h1>Not found!</h1>}
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

export default ListArchivedNotes;

ListArchivedNotes.propTypes = {
    className: PropTypes.string,
};
