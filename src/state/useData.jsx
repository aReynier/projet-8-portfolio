import { React, createContext, useState, useEffect } from 'react';

import allData from '../fetch/fetchText';

export const Data = createContext({
  data: {},
});

const DataProvider = (props) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { children } = props;

  const fetchData = async () => {
    const result = await allData();

    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return loading ? (
    <div>Loading</div>
  ) : (
    <Data.Provider value={{ data }}>{children}</Data.Provider>
  );
};

export default DataProvider;
