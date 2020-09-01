import React, { useState, useEffect } from "react";
import { apiKey } from "./Keys";

const contextKey = "84594b418f46c73ab";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${contextKey}&q=${term}`
      )
        .then((res) => res.json())
        .then((res) => {
          setData(res);
        });
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
