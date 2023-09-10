import { createContext } from "react";
import { useState, useEffect } from "react";

import dataText from "../../pages/Home/fetchText"

export const AllDataContext = createContext({
    allData: {}
});

const AllDataContextProvider = props => {
    const [allData, setAllData] = useState({})
    const [loading, setLoading] = useState(true)

    const fetchText = async () => {
        const result = await dataText();

        setAllData(result)
        setLoading(false)
    }

    useEffect(() => {
        fetchText()
    }, [])

    return loading ? (
        <div></div>
    ) : (
        <AllDataContext.Provider value={{ allData }}>
            {console.log(allData)}
            {props.children}
        </AllDataContext.Provider>
    )
}

export default AllDataContextProvider;
