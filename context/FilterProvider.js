'use client'

import { createContext, useContext, useEffect, useReducer } from "react"
import { useGlobalProduct } from "./ProductProvider";
import FilterReducer from "./reducer/FilterReducer";

const FilterContext = createContext();

const initialState = { 
    filter_product: [],
    all_Product: [],
    grid_view: true,
    product_value: " ",
    filters:{
        text: '',
        category:'All',
        company:'All',
        colors:"All",
        price:0,
        maxPrice:0,
        minPrice:0,

    }
}


export default function FilterProvider({ children }) {
    const { state: { products } } = useGlobalProduct();

    const [filterState, filterDispatch] = useReducer(FilterReducer, initialState);
    // console.log(filterState.all_Product);

    const setGridView = () => {
        return filterDispatch({ type: "SET_GRID_VIEW" })
    }
    const setListView = () => {
        return filterDispatch({ type: "SET_LIST_VIEW" })
    }
//clear filter
const clearFilter=()=>{
    filterDispatch({type:"CLEAR_ALL_FILTER"})
}

    //sorting function
    const sorting = (event) => {
        filterDispatch({ type: "GET_SORT_VALUE", payload: event.target.value })
    }


    //filter the all_product
    useEffect(()=>{
        filterDispatch({type:"FILTER_PRODUCT"})
    },[filterState.filters])


    //sort the product
    useEffect(() => {
        filterDispatch({ type: 'SORT_PRODUCT', payload: products });
    }, [filterState.product_value, products])

    //
    const updateFilterValue=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        filterDispatch({ type: "GET_SEARCH_VALUE", payload: {name,value} })

    }
    useEffect(() => {
        filterDispatch({ type: "LOAD_FILTER_DATA", payload: products })
    }, [products]);

    const value = {
        filterState,
        setGridView,
        setListView,
        sorting,
        updateFilterValue,
        clearFilter
    }
    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useGlobalFilter = () => {
    return useContext(FilterContext);
}
