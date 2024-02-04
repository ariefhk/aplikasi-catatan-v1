import { apiInstance } from "./instance";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getStorageData } from "../utils/local-storage";
import { AxiosError } from "axios";

export const useRegister = (callback = null) => {
    return useMutation({
        mutationKey: ["register"],
        mutationFn: ({ name, email, password }) => {
            return apiInstance.post(
                "/register",
                { name, email, password },
                {
                    headers: {
                        "Content-Type": "application/json",
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

export const useLogin = (callback = null) => {
    return useMutation({
        mutationKey: ["login"],
        mutationFn: ({ email, password }) => {
            return apiInstance.post(
                "/login",
                {
                    email,
                    password,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
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

export const useGetUserLogged = (callbackErr = null) => {
    return useQuery({
        retry: false,
        queryKey: ["get_user_logged"],
        queryFn: async ({ signal }) => {
            try {
                const response = await apiInstance.get("/users/me", {
                    signal,
                    headers: {
                        Authorization: `Bearer ${getStorageData("accessToken")}`,
                    },
                });
                if (callbackErr && typeof callbackErr === "function") {
                    callbackErr(null);
                }
                return response;
            } catch (error) {
                if (error instanceof AxiosError) {
                    if (callbackErr && typeof callbackErr === "function") {
                        callbackErr(error);
                    }
                    throw error;
                }
            }
        },
        refetchOnWindowFocus: false,
    });
};
