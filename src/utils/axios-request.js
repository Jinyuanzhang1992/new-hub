import { useState, useEffect } from "react";
import axios from "axios";

function useRequest(url, updateState) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const api = axios.create();

    const requestInterceptor = api.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(new Error(error.message));
      }
    );

    api
      .get(url)
      .then((res) => {
        setData(res.data || []);
        if (updateState) {
          updateState(res.data || []);
        }
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      api.interceptors.request.eject(requestInterceptor);
    };
  }, [url, updateState]);

  return { data, loading, error };
}

export default useRequest;
