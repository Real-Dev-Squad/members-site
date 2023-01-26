import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState, useRef } from "react";

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

  const cancelRequest = useRef<boolean>(false);

  const [state, setState] = useState(intialState);

  useEffect(() => {
    cancelRequest.current = false;
    const FetchData = async () => {
      try {
        const response = await axios[method](url, {
          ...config,
        });
        if (cancelRequest.current) return;
        setState({ data: response.data, loading: false, error: null });
      } catch (error) {
        if (cancelRequest.current) return;
        setState({ data: null, loading: false, error: error as Error });
      }
    };
    FetchData();
    return () => {
      cancelRequest.current = true;
    };
  }, [url, method, config]);

  return state;
};

export { useAxios };
