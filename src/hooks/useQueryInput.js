import { useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';

const useQueryInput = (query) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const keywordQueryInput = searchParams.get(query) || '';

    const handleQueryInputOnChange = useCallback(
        (e) => {
            const keyword = e?.target?.value;
            if (keyword) {
                setSearchParams({ keyword });
            } else {
                setSearchParams({});
            }
        },
        [setSearchParams],
    );

    return { keywordQueryInput, handleQueryInputOnChange };
};

export default useQueryInput;
