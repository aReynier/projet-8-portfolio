const fetchText = async () => {
    try {
        const responseText = await fetch('/textContent.json')
        const dataText = await responseText.json()
        return dataText
    } catch (error) {
        console.log(error)
        return []
    }
}

export default fetchText
