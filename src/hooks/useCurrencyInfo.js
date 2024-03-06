import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
    const[data,setData] = useState([]);

    useEffect(() => {

        const fetchFunction = async() => {

            const res = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            const data = await res.json()
            setData((prev) => data[currency])
        }

        fetchFunction()
        
    },[currency])
    console.log("Data",data);
    return data;
}

export default useCurrencyInfo;