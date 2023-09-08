// import { useContext, useState, useEffect } from "react";

// import dataText from "../../pages/Home/fetchText"

// import Header from '../Header';
// import Home from '../../pages/Home';

// const DataProvider = ({ children }) => {
//     const [data, setData] = useState([])
//     const [loading, setLoading] = useState(true)

//     const fetchText = async () => {
//         const result = await dataText();

//         setData(result)
//         setLoading(false)
//     }

//     useEffect(() => {
//         fetchText()
//     }, [])

//     return (
//             <div className="pattern">
//                 {children}
//                 <Header data={data}/>
//                 <Home data={data}/>
//             </div>
//     )
// }

// export default DataProvider;

// export const DataProvider = React.createContext();
// state = {message: ""}
// render() {
//         return (
//             <DataProvider.Provider value={
//             {   state: this.state,
//                 setMessage: (value) => this.setState({
//                             message: value })}}>
//             {this.props.children}   //this indicates that all the child tags with MyProvider as Parent can access the global store.
//             </DataProvider.Provider>)
//     }
// }

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
