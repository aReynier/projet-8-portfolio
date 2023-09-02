const fetchWork = async () => {
    try {
        const responseWork = await fetch('/works.json')
        const dataWork = await responseWork.json()
        return dataWork
    } catch (error) {
        console.log(error)
        return []
    }
}

export default fetchWork
