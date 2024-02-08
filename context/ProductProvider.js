'use client'
import React, { createContext, useContext, useEffect, useReducer } from 'react'
import ProductReducer from './reducer/ProductReducer';
import axios from 'axios';
const ProductContext = createContext();


const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
}



export default function ProductProvider({ children }) {

    const [state, dispatch] = useReducer(ProductReducer, initialState)
    useEffect(() => {
        const fetchData = async () => {
            dispatch({type: "SET_LOADING"})
            try {
                let res = await axios.get("https://api.pujakaitem.com/api/products");
                const data = await res.data
                dispatch({ type: "SET_API_DATA", payload: data })
            } catch (error) {
                dispatch({type:"SET_ERROR", })
                
            }
        }
        fetchData()
    }, [])

    const value = {
        state,
        dispatch,
    }

    return (
        <ProductContext.Provider value={value} >
            {children}
        </ProductContext.Provider>
    )
}

export const useGlobalProduct = () => {
    return useContext(ProductContext);
}
