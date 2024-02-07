import { apiInstance } from "./instance";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getStorageData } from "../utils/local-storage";

export const useGetNotes = (searchInput, querySetting = {}) => {
    return useQuery({
        queryKey: ["get_notes", searchInput],
        queryFn: async ({ signal }) => {
            const response = await apiInstance.get(`/notes`, {
                signal,
                headers: {
                    Authorization: `Bearer ${getStorageData("accessToken")}`,
                },
            });

            return response?.data?.data?.filter((todo) => {
                return todo?.title?.toLowerCase().includes(searchInput.toLowerCase());
            });
        },
        ...querySetting,
    });
};

export const useGetArchivedNotes = () => {
    return useQuery({
        queryKey: ["get_archived_notes"],
        queryFn: ({ signal }) => {
            return apiInstance.get(`/notes/archived`, {
                signal,
                headers: {
                    Authorization: `Bearer ${getStorageData("accessToken")}`,
                },
            });
        },
    });
};

export const useGetNote = (id) => {
    return useQuery({
        queryKey: ["get_note_by_id", id],
        queryFn: ({ signal }) => {
            return apiInstance.get(`/notes/${id}`, {
                signal,
                headers: {
                    Authorization: `Bearer ${getStorageData("accessToken")}`,
                },
            });
        },
        enabled: !!id,
    });
};

export const useCreateNote = (callback = null) => {
    return useMutation({
        mutationKey: ["create_note"],
        mutationFn: ({ title, body }) => {
            return apiInstance.post(
                `/notes`,
                {
                    title,
                    body,
                },
                {
                    headers: {
                        Authorization: `Bearer ${getStorageData("accessToken")}`,
                    },
                }
            );
        },
        onSuccess: (data) => {
            if (callback && typeof callback === "function") {
                callback(data, null);
            }
        },
        onError: (err) => {
            if (callback && typeof callback === "function") {
                callback(null, err);
            }
        },
    });
};

export const usePostArchiveNote = (callback = null) => {
    return useMutation({
        mutationKey: ["post_archive_note"],
        mutationFn: ({ id }) => {
            return apiInstance.post(`/notes/${id}/archive`, {
                headers: {
                    Authorization: `Bearer ${getStorageData("accessToken")}`,
                },
            });
        },
        onSuccess: (data) => {
            if (callback && typeof callback === "function") {
                callback(data, null);
            }
        },
        onError: (err) => {
            if (callback && typeof callback === "function") {
                callback(null, err);
            }
        },
    });
};

export const usePostUnArchiveNote = (callback = null) => {
    return useMutation({
        mutationKey: ["post_unarchive_note"],
        mutationFn: ({ id }) => {
            return apiInstance.post(`/notes/${id}/unarchive`, {
                headers: {
                    Authorization: `Bearer ${getStorageData("accessToken")}`,
                },
            });
        },
        onSuccess: (data) => {
            if (callback && typeof callback === "function") {
                callback(data, null);
            }
        },
        onError: (err) => {
            if (callback && typeof callback === "function") {
                callback(null, err);
            }
        },
    });
};

export const useDeleteNote = (callback = null) => {
    return useMutation({
        mutationKey: ["delete_note"],
        mutationFn: ({ id }) => {
            return apiInstance.delete(`/notes/${id}`, {
                headers: {
                    Authorization: `Bearer ${getStorageData("accessToken")}`,
                },
            });
        },
        onSuccess: (data) => {
            if (callback && typeof callback === "function") {
                callback(data, null);
            }
        },
        onError: (err) => {
            if (callback && typeof callback === "function") {
                callback(null, err);
            }
        },
    });
};
