import { useSearchParams } from "react-router-dom";
import { useDebounce } from "@uidotdev/usehooks";

const useQueryUtil = (query, delay = 300) => {
    const [searchParams] = useSearchParams();
    const keywordQuery = searchParams.get(query) || "";
    const debounceKeywordQuery = useDebounce(keywordQuery, !delay || typeof delay !== "number" ? 300 : delay);

    return { keywordQuery, debounceKeywordQuery };
};

export default useQueryUtil;
