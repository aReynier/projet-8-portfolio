const fetchText = async () => {
  try {
    const responseText = await fetch('/text.json');
    const textData = await responseText.json();
    return textData;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default fetchText;
