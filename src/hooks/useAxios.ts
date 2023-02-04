/**Third Party Dependency */
import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState, useRef } from "react";

type Methods = "get" | "post" | "put" | "delete" | "patch";

type UseAxiosResult = {
  data: unknown;
  loading: boolean;
  error: Error | null;
};

/**
 * @description useAxios hook to call api by axios method.
 * This helps to avoid repetition of setting up axios method for calling an API.
 * @param url containing api address
 * @param method  api methods
 * @param config it contains information about configuration like headers and additional information
 * @returns {data,loading,error}
 * @todo Handle axios api request with storing data , loading and error
 * @todo cancel API request if different component is mounting
 */

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

  /**checks if API request is cancel or not, on cancel returns*/
  const cancelRequest = useRef<boolean>(false);

  const [state, setState] = useState<UseAxiosResult>(intialState);

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
