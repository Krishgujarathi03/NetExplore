import { useEffect, useState } from "react";
import { API_KEY, CONTEXT_KEY } from "./Keys";

function useGoogle(term) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [term]);

  return { data };
}

export default useGoogle;
