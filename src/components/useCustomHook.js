import React, { useState, useEffect } from "react";
import axios from "axios";
const useCustomHook = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await axios.get(url);
        const convertData = [];
        for (let key in res.data) {
          convertData.push({ ...res.data[key], id: key });
        }
        setData(convertData);
      } catch (err) {
        // console.log(err);
      }
    };
    getData();
  }, [url]);
  return [data];
};

export default useCustomHook;
