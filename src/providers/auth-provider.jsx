import { apiInstance } from '../networks/instance';
import { useEffect, useMemo, useState } from 'react';
import { deleteStorageData, getStorageData, saveStorageData } from '../utils/local-storage';
import PropTypes from 'prop-types';
import { AuthContext } from '../contexts/auth-context';

const AuthProvider = ({ children }) => {
    // State to hold the authentication token
    const [token, setToken_] = useState(getStorageData('accessToken'));

    // Function to set the authentication token
    const setToken = (newToken) => {
        saveStorageData('accessToken', newToken);
        setToken_(newToken);
    };

    // Function to delete the authentication token
    const deleteToken = () => {
        deleteStorageData('accessToken');
        setToken_(null);
    };

    useEffect(() => {
        if (token) {
            apiInstance.defaults.headers.Authorization = `Bearer ${token}`;
            saveStorageData('accessToken', token);
        } else {
            // deleting cache auth header
            delete apiInstance.defaults.headers.common['Authorization'];
            deleteStorageData('accessToken');
        }
    }, [token]);

    // Memoized value of the authentication context
    const authContextValue = useMemo(
        () => ({
            token,
            setToken,
            deleteToken,
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
