import {CATEGORIES} from '../../constants/data/index';
import { categoriesTypes } from '../types/categories.types';

const { SELECT_CATEGORY } = categoriesTypes

const initialState = {
    categories: CATEGORIES,
    selected: null
}

const CategoryReducer = (state = initialState, action) => {

    switch(action.type){
        case SELECT_CATEGORY:
            const indexCategory = state.categories.findIndex(
                (category) => category.id === action.categoryID
            )

            if(indexCategory === -1) return state

            return {
                ...state,
                selected:state.categories[indexCategory]
            }
            
        default: return state
    }

}


export default CategoryReducer;