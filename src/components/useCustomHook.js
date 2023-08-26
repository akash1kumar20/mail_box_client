import { useState, useEffect } from "react";
import axios from "axios";
const useCustomHook = (url) => {
  const [data, setData] = useState(null);
  const [arrayLength, setArrayLength] = useState(0);
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await axios.get(url);
        const convertData = [];
        for (let key in res.data) {
          convertData.push({ ...res.data[key], id: key });
        }
        setData(convertData);
        setArrayLength(convertData.length);
      } catch (err) {
        // console.log(err);
      }
    };
    getData();
    setInterval(getData, 2000);
    //this will help to get the data automatically after every 2second.
  }, [url]);
  return [data, arrayLength];
};

export default useCustomHook;
