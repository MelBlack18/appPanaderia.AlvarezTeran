import {PRODUCTS} from '../../constants/data/products'
import { productsTypes } from '../types/products.types'

const {SELECT_PRODUCT, FILTERED_PRODUCTS} = productsTypes

const initialState = {
    products: PRODUCTS,
    filteredProducts: [],
    selected: null
}

const ProductsReducer = (state=initialState, action) => {

    switch(action.type){
        case SELECT_PRODUCT:
            return {
                ...state,
                selected: state.products.find(product => product.id === action.productID)
            }
        case FILTERED_PRODUCTS:
            return {
                ...state,
                filteredProducts: state.products.filter(product => product.categoryId === action.categoryID)
            }
        default:
            return state
    }
    
}

export default ProductsReducer