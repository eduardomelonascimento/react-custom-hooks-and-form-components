import { useCallback, useState } from "react";

export default function useFetch() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const request = useCallback(async (url, options) => {
    let response;
    try {
      setError(false);
      setLoading(true);
      response = await fetch(url, options);
      setData(await response.json());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      return { response };
    }
  }, []);

  return { data, error, loading, request };
}
