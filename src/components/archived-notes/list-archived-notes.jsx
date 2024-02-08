import PropTypes from "prop-types";
import { cn } from "../../utils/tailwind-merge";

import { useQueryUtil } from "../../hooks";
import { useGetArchivedNotes } from "../../networks/note";

const ListArchivedNotes = ({ className }) => {
    const { debounceKeywordQuery } = useQueryUtil("keyword", 300);
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
        <section className={cn("flex-grow grid md:grid-cols-4 grid-cols-2  gap-[12px] overflow-y-scroll", className)}>
            {loadingNotes && <h1>Loading notes ...</h1>}
            {errorFetchNotes && <h1>Error! </h1>}
            {successFetchNotes && notes.length === 0 && <h1>Not found!</h1>}
            {successFetchNotes &&
                notes.length > 0 &&
                notes.map((note) => {
                    return (
                        <div key={note?.id} className="border p-[10px] h-[200px] rounded-lg">
                            {note?.title}
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
