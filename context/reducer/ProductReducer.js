
export default function ProductReducer(state, action) {
    switch (action.type) {
        case 'SET_API_DATA':
            const featuredData = action.payload.filter((value, indx) => value.featured === true);
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: featuredData,
            }
        case 'SET_ERROR':
            return {
                ...state,
                isError: true,
            }
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: true
            }


        default:
            return {
                ...state
            }
    }
}
