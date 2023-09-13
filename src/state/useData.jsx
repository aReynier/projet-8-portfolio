import { React, createContext, useState, useEffect } from 'react';

import textData from '../pages/Home/fetchText';

export const Data = createContext({
  data: {},
});

const DataProvider = (props) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { children } = props;

  const fetchText = async () => {
    const result = await textData();

    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchText();
  }, []);

  return loading ? (
    <div>Loading</div>
  ) : (
    <Data.Provider value={{ data }}>{children}</Data.Provider>
  );
};

export default DataProvider;
