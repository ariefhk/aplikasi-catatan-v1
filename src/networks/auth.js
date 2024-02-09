import { apiInstance } from './instance';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getStorageData } from '../utils/local-storage';
import { AxiosError } from 'axios';

export const useRegister = (mutationSetting = {}) => {
    return useMutation({
        mutationKey: ['register'],
        mutationFn: ({ name, email, password }) => {
            return apiInstance.post(
                '/register',
                { name, email, password },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );
        },
        ...mutationSetting,
    });
};

export const useLogin = (mutationSetting = {}) => {
    return useMutation({
        mutationKey: ['login'],
        mutationFn: async ({ email, password }) => {
            const response = await apiInstance.post(
                '/login',
                {
                    email,
                    password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );

            return response.data;
        },
        ...mutationSetting,
    });
};

export const useGetUserLogged = (callbackErr = null, querySetting = {}) => {
    return useQuery({
        retry: false,
        queryKey: ['get_user_logged'],
        queryFn: async ({ signal }) => {
            try {
                const response = await apiInstance.get('/users/me', {
                    signal,
                    headers: {
                        Authorization: `Bearer ${getStorageData('accessToken')}`,
                    },
                });

                return response;
            } catch (error) {
                if (error instanceof AxiosError) {
                    if (callbackErr && typeof callbackErr === 'function') {
                        callbackErr(error);
                    }
                    throw error;
                }
                throw error;
            }
        },
        refetchOnWindowFocus: false,
        ...querySetting,
    });
};
