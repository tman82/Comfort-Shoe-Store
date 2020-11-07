import axios from 'axios'
import { ADD_PRODUCT_BASKET, GET_SHOE_ITEMS, GET_NUMBERS_BASKET, ITEMS_LOADING } from '../actions/types'


export const getItems = () => dispatch => {
    dispatch(setItemsLoading())
    axios.get('http://localhost:4000/shoes')
        .then(res =>
            dispatch({
                type: GET_SHOE_ITEMS,
                payload: res.data
            })
        )
    
    return {
        type: GET_SHOE_ITEMS
    }
}

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}