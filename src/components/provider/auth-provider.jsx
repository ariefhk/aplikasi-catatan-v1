import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { deleteStorageData, getStorageData, saveStorageData } from '../../utils/local-storage';
import PropTypes from 'prop-types';
import { AuthContext } from '../../contexts/auth-context';

const AuthProvider = ({ children }) => {
    // State to hold the authentication token
    const [token, setToken_] = useState(getStorageData('accessToken'));

    // Function to set the authentication token
    const setToken = (newToken) => {
        saveStorageData('accessToken', newToken);
        setToken_(newToken);
    };

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            saveStorageData('accessToken', token);
        } else {
            delete axios.defaults.headers.common['Authorization'];
            deleteStorageData('accessToken');
        }
    }, [token]);

    // Memoized value of the authentication context
    const authContextValue = useMemo(
        () => ({
            token,
            setToken,
        }),
        [token],
    );

    // Provide the authentication context to the children components
    return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
};
