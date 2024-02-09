import { useGetNotes } from '../../networks/note';
import PropTypes from 'prop-types';
import { cn } from '../../utils/tailwind-merge';
import { useQueryUtil } from '../../hooks';
import { useNavigate } from 'react-router-dom';

const ListNotes = ({ className }) => {
    const { debounceKeywordQuery } = useQueryUtil('keyword', 300);
    const navigate = useNavigate();

    const {
        data: notes,
        isLoading: loadingNotes,
        isSuccess: successFetchNotes,
        isError: errorFetchNotes,
    } = useGetNotes(debounceKeywordQuery);

    return (
        <section className={cn('grid flex-grow grid-cols-2 gap-[12px]  overflow-y-auto md:grid-cols-4', className)}>
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
                            className='h-[200px] cursor-pointer rounded-lg border-2 border-baseBlack p-[10px] hover:border-4 hover:border-baseBlack'>
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
