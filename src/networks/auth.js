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

export const useGetUserLogged = (token) => {
    return useQuery({
        retry: false,
        queryKey: ['get_user_logged', token],
        queryFn: async ({ signal }) => {
            const response = await apiInstance.get('/users/me', {
                signal,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return response.data;
        },
        refetchOnWindowFocus: true,
        enabled: !!token,
    });
};
