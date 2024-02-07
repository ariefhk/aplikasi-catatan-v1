import { useSearchParams } from "react-router-dom";
import { useDebounce } from "@uidotdev/usehooks";
import { useCallback } from "react";
import { useGetNotes } from "../../networks/note";

const InputHome = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const keywordParams = searchParams.get("keyword") || "";
    const debouncedKeywordParams = useDebounce(keywordParams, 300);

    const { data: notesData } = useGetNotes(debouncedKeywordParams);

    console.log({
        keywordParams,
        notesData,
    });

    const handleKeywordOnChange = useCallback(
        (keyword) => {
            if (keyword) {
                setSearchParams({ keyword });
            } else {
                setSearchParams({});
            }
        },
        [setSearchParams]
    );

    return (
        <div>
            <input type="text" className="border" name={keywordParams} onChange={(e) => handleKeywordOnChange(e.target.value)} />
        </div>
    );
};

export default InputHome;
