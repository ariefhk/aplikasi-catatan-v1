import { useGetNotes } from '../../networks/note';
import PropTypes from 'prop-types';
import { cn } from '../../utils/tailwind-merge';
import { useQueryUtil } from '../../hooks';

const ListNotes = ({ className }) => {
    const { debounceKeywordQuery } = useQueryUtil('keyword', 300);

    const {
        data: notes,
        isLoading: loadingNotes,
        isSuccess: successFetchNotes,
        isError: errorFetchNotes,
    } = useGetNotes(debounceKeywordQuery);

    return (
        <section className={cn('grid flex-grow grid-cols-2 gap-[12px]  overflow-y-scroll md:grid-cols-4', className)}>
            {loadingNotes && <h1>Loading notes ...</h1>}
            {errorFetchNotes && <h1>Error! </h1>}
            {successFetchNotes && notes.length === 0 && <h1>Not found!</h1>}
            {successFetchNotes &&
                notes.length > 0 &&
                notes.map((note) => {
                    return (
                        <div key={note?.id} className='h-[200px] rounded-lg border p-[10px]'>
                            {note?.title}
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
