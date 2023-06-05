import { toast } from "react-toastify";

import axios from "axios";

import { LOCAL_STORAGE_KEYS } from "../constants/appConstant";

import {
  BASE_URL,
  DELETE_METHOD,
  GET_METHOD,
  PATCH_METHOD,
  POST_METHOD,
  PUT_METHOD,
} from "./constants";

const defaultHeaders = {
  "Content-Type": "application/json",
  Accept:
    "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01",
};

const axiosInstance = axios.create({
  headers: defaultHeaders,
});

//GET Method
export async function getApi<ParamsT, ResponseT>(
  reqPath: string,
  payload?: any
): Promise<ResponseT> {
  const response = await axiosInstance.request({
    url: reqPath,
    method: GET_METHOD,
    params: payload,
    headers: {
      ...defaultHeaders,
    },
  });
  return response.data;
}

//POST Method
export const postApi = async (reqPath: string, payload: object = {}) => {
  const response = await axiosInstance.request({
    url: reqPath,
    method: POST_METHOD,
    data: payload,
    headers: {
      ...defaultHeaders,
    },
  });
  return response.data;
};

//PUT Method
export const putApi = async (reqPath: string, payload: object = {}) => {
  const response = await axiosInstance.request({
    url: reqPath,
    method: PUT_METHOD,
    data: payload,
    headers: {
      ...defaultHeaders,
    },
  });
  return response.data;
};

//PATCH Method
export const patchApi = async (reqPath: string, payload: object = {}) => {
  const response = await axiosInstance.request({
    url: reqPath,
    method: PATCH_METHOD,
    data: payload,
    headers: {
      ...defaultHeaders,
    },
  });
  return response.data;
};

//DELETE Method
export const deleteApi = async (reqPath: string, payload: object = {}) => {
  const response = await axiosInstance.request({
    url: reqPath,
    method: DELETE_METHOD,
    data: payload,
    headers: {
      ...defaultHeaders,
    },
  });
  return response.data;
};

// adding the default query params required for all API's
axiosInstance.interceptors.request.use((config: any) => {
  config.headers = {
    ...config.headers,
  };
  return config;
});

//interceptor for showing toast notifications on global level
axiosInstance.interceptors.response.use(
  (res) => {
    toast.success(res?.data?.msg);
    return res;
  },
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.clear();
    }
    toast.error(error?.response?.data?.errors ?? "Something went wrong!");
    return Promise.reject(error.response.data.message);
  }
);
