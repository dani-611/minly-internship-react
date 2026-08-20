import { useState, useEffect } from "react";
import { ApiStatus } from "../constants/ApiStatus";

export interface FetchState<T> {
  status: string; // LOADING | ERROR | EMPTY | DATA
  data: T | null;
  error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    status: ApiStatus.LOADING,
    data: null,
    error: null,
  });

  useEffect(() => {
    let isCurrent = true;

    async function fetchData() {
      if (isCurrent) {
        setState({ status: ApiStatus.LOADING, data: null, error: null });
      }
      
      try {
        const response = await fetch(url, { method: "GET" });
        console.log(response);
        if (!response.ok) {
          if (response.status === 404) {
            if (isCurrent) setState({ status: ApiStatus.EMPTY, data: null, error: null });
            return;
          }
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const result = await response.json();
        console.log(result)
        if (!isCurrent) return;

        if (!result || (Array.isArray(result) && result.length === 0)) {
          setState({ status: ApiStatus.EMPTY, data: null, error: null });
        } else {
          setState({ status: ApiStatus.DATA, data: result, error: null });
        }
      } catch (err) {
        if (isCurrent) {
          setState({ status: ApiStatus.ERROR, data: null, error: (err as Error).message });
        }
      }
    }

    fetchData();

    return () => {
      isCurrent = false;
    };
  }, [url]);

  return state;
}
