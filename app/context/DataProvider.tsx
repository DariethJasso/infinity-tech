'use client'
import { useEffect, useState,createContext } from "react";
import {fetchProducts} from "../lib/data";
import { Products } from "../lib/definitions";
import axios from 'axios';

export type DataGlobal = {
    products:Products[];
    cart:Products[];
    setCart:(cart:Products[])=>void
   

}
const DataContext = createContext<DataGlobal>({
    products:[],
    cart:[],
    setCart:()=>{}
});

 const DataProvider = ({children}:{children: React.ReactNode}) => {
    const [products, setProducts] = useState<Products[]>([]);
    const [cart,setCart] = useState<Products[]>([]);
    const fetchData = async () => {
        try {
            const {data} = await axios.get("https://1c7ftyevsd.execute-api.us-east-2.amazonaws.com/dev/products")
        setProducts(data.data)
        } catch (error) {
            console.error('Database Errror:',error);
        }
    }

    useEffect(() => {
        fetchData();
    },[]);

    return (
        <DataContext.Provider value={{
            products,
            cart,
            setCart
            }}>
        {children}
        </DataContext.Provider>
    );
};
export default DataContext;
export {DataProvider};
