import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

type Methods = "get" | "post" | "put" | "delete" | "patch";

type UseAxiosResult = {
  data: any;
  loading: boolean;
  error: Error | null;
};

const useAxios = (
  url: string,
  method: Methods = "get",
  config?: AxiosRequestConfig
): UseAxiosResult => {
  const intialState: UseAxiosResult = {
    data: null,
    loading: true,
    error: null,
  };

  const [state, setState] = useState(intialState);

  useEffect(() => {
    const request = axios[method](url, {
      ...config,
    });
    request
      .then((response) => {
        setState({ data: response.data, loading: false, error: null });
      })
      .catch((error) => {
        setState({ data: null, loading: false, error });
      });
  }, [url, method, config]);

  return state;
};

export { useAxios };
