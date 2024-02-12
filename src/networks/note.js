import { apiInstance } from './instance';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getStorageData } from '../utils/local-storage';

export const useGetNotes = (searchInput, querySetting = {}) => {
    return useQuery({
        queryKey: ['get_notes', searchInput],
        queryFn: async ({ signal }) => {
            const response = await apiInstance.get(`/notes`, {
                signal,
                headers: {
                    Authorization: `Bearer ${getStorageData('accessToken')}`,
                },
            });
            return response?.data?.data?.filter((todo) => {
                return todo?.title?.toLowerCase().includes(searchInput?.toLowerCase());
            });
        },
        ...querySetting,
    });
};

export const useGetArchivedNotes = (searchInput, querySetting = {}) => {
    return useQuery({
        queryKey: ['get_archived_notes', searchInput],
        queryFn: async ({ signal }) => {
            const response = await apiInstance.get(`/notes/archived`, {
                signal,
                headers: {
                    Authorization: `Bearer ${getStorageData('accessToken')}`,
                },
            });
            return response?.data?.data?.filter((todo) => {
                return todo?.title?.toLowerCase().includes(searchInput.toLowerCase());
            });
        },
        ...querySetting,
    });
};

export const useGetNote = (id, querySetting = {}) => {
    return useQuery({
        queryKey: ['get_note_by_id', id],
        queryFn: async ({ signal }) => {
            const response = await apiInstance.get(`/notes/${id}`, {
                signal,
                headers: {
                    Authorization: `Bearer ${getStorageData('accessToken')}`,
                },
            });

            return response?.data?.data;
        },
        enabled: !!id,
        ...querySetting,
    });
};

export const useCreateNote = (mutationSetting = {}) => {
    return useMutation({
        mutationKey: ['create_note'],
        mutationFn: async ({ title, body }) => {
            const response = await apiInstance.post(
                `/notes`,
                {
                    title,
                    body,
                },
                {
                    headers: {
                        Authorization: `Bearer ${getStorageData('accessToken')}`,
                    },
                },
            );
            return response?.data;
        },

        ...mutationSetting,
    });
};

export const usePostArchiveNote = (mutationSetting = {}) => {
    return useMutation({
        mutationKey: ['post_archive_note'],
        mutationFn: async ({ id }) => {
            const response = await apiInstance.post(`/notes/${id}/archive`, {
                headers: {
                    Authorization: `Bearer ${getStorageData('accessToken')}`,
                },
            });

            return response?.data;
        },
        ...mutationSetting,
    });
};

export const usePostUnArchiveNote = (mutationSetting = {}) => {
    return useMutation({
        mutationKey: ['post_unarchive_note'],
        mutationFn: async ({ id }) => {
            const response = await apiInstance.post(`/notes/${id}/unarchive`, {
                headers: {
                    Authorization: `Bearer ${getStorageData('accessToken')}`,
                },
            });

            return response?.data;
        },
        ...mutationSetting,
    });
};

export const useDeleteNote = (mutationSetting = {}) => {
    return useMutation({
        mutationKey: ['delete_note'],
        mutationFn: async ({ id }) => {
            const response = await apiInstance.delete(`/notes/${id}`, {
                headers: {
                    Authorization: `Bearer ${getStorageData('accessToken')}`,
                },
            });

            return response?.data;
        },
        ...mutationSetting,
    });
};
