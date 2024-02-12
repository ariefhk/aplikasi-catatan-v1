import PropTypes from 'prop-types';
import { useQueryUtil } from '../../hooks';
import { useGetArchivedNotes } from '../../networks/note';
import { cn } from '../../utils/tailwind-merge';
import { ErrorListNote, LoadingListNote, SucccesListNote } from '../note';

const ListArchivedNotes = ({ className }) => {
    const { debounceKeywordQuery } = useQueryUtil('keyword', 300);
    const {
        data: notes,
        isLoading: loadingNotes,
        isSuccess: successFetchNotes,
        isError: errorFetchNotes,
    } = useGetArchivedNotes(debounceKeywordQuery);

    return (
        <section className={cn('grid flex-grow grid-cols-2 gap-[12px] overflow-y-auto p-2 md:grid-cols-4', className)}>
            {loadingNotes && <LoadingListNote />}
            {errorFetchNotes && <ErrorListNote />}
            {successFetchNotes && <SucccesListNote notes={notes} />}
        </section>
    );
};

export default ListArchivedNotes;

ListArchivedNotes.propTypes = {
    className: PropTypes.string,
};
