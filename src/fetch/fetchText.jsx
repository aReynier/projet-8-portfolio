const fetchData = async () => {
  try {
    const responseData = await fetch('/text.json');
    const allData = await responseData.json();
    return allData;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default fetchData;
