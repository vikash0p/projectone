
export default function FilterReducer(state, action) {


    switch (action.type) {
        case "LOAD_FILTER_DATA":
            return {
                ...state,
                filter_product: [...action.payload],
                all_Product: [...action.payload],
            };
        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true,
            }
        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false,
            };
        case "GET_SORT_VALUE":
            return {
                ...state,
                product_value: action.payload

            };
        case "SORT_PRODUCT":
            let tempSortData = [...action.payload];

            const sortingProduct = (a, b) => {
                switch (state.product_value) {
                    case "increasing": return a.name.localeCompare(b.name);
                    case "decreasing": return b.name.localeCompare(a.name);
                    case "lowest": return a.price - b.price;
                    default: return b.price - a.price
                }
                // if (state.product_value === "increasing") {
                //     return a.name.localeCompare(b.name)

                // } else if (state.product_value === "decreasing") {
                //         
                //     }

                // else if (state.product_value === "lowest") {
                //     return a.price - b.price
                // }
                // else {
                //     return b.price - a.price

                // }

            }
            let newSortData = tempSortData.sort(sortingProduct);


            return {
                ...state,
                filter_product: newSortData,
            };
        case "GET_SEARCH_VALUE":
            const { name, value } = action.payload
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                },

            };
        case "FILTER_PRODUCT":
            // console.log(state);
            let { all_Product, filters } = state;
            let { text ,category } = state.filters
            console.log(category);
            let tempFilterProduct = [...all_Product];
            // if (text) {
            //     tempFilterProduct = tempFilterProduct.filter(curElem =>
            //         curElem.name.toLowerCase().includes(state.filters.text.toLowerCase())
            //     );
            // }
            const filterProductData = (curElem) => {
                for (let key in filters) {
                    if (filters[key]) {
                        switch (key) {
                            case "text":
                                if (!curElem.name.toLowerCase().includes(filters.text.toLowerCase())) {
                                    return false;
                                }
                                break;
                            case "category":
                                if (filters.category !== "All" && curElem.category !== filters.category) {
                                    console.log("Filtered by category");
                                    return false;
                                }
                                break;
                            case "company":
                                if (filters.company !== "All" && curElem.company !== filters.company) {
                                    console.log("Filtered by category");
                                    return false;
                                }
                                break;
                            // Add additional cases for other filters if needed
                        }
                    }
                }
                return true;
            };



            return {
                ...state,
                filter_product: tempFilterProduct.filter(filterProductData)
            };

        default:
            return {
                ...state,
            }

    }


}