import { useState, useEffect } from "react";
import { getCity } from "../helpers/getCity"

export const useFetch = (city) => {
    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    const getData = async () => {
        const  newCity = await getCity(city);
        setData(newCity);
        setLoading(false);
    }

    useEffect(() => {
        getData();
        setLoading(true);
    },[city]); 

    return {
        data,
        loading,
        setData
    }

}