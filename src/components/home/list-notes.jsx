import PropTypes from 'prop-types';
import { useQueryUtil } from '../../hooks';
import { useGetNotes } from '../../networks/note';
import { cn } from '../../utils/tailwind-merge';
import { ErrorListNote, LoadingListNote, SucccesListNote } from '../note';

const ListNotes = ({ className }) => {
    const { debounceKeywordQuery } = useQueryUtil('keyword', 300);

    const {
        data: notes,
        isLoading: loadingNotes,
        isSuccess: successFetchNotes,
        isError: errorFetchNotes,
    } = useGetNotes(debounceKeywordQuery);

    return (
        <section className={cn('grid flex-grow grid-cols-2 gap-[12px] overflow-y-auto p-1 md:grid-cols-4', className)}>
            {loadingNotes && <LoadingListNote />}
            {errorFetchNotes && <ErrorListNote />}
            {successFetchNotes && <SucccesListNote notes={notes} />}
        </section>
    );
};

export default ListNotes;

ListNotes.propTypes = {
    className: PropTypes.string,
};
