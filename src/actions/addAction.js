import { ADD_PRODUCT_BASKET, GET_SHOE_ITEMS} from './types'
import axios from 'axios'


export const addBasket = (productName) => {
    return (dispatch) => {
        console.log('Adding to Basket')
        console.log('Product:', productName)

            /*dispatch({
                type: ADD_PRODUCT_BASKET,
                payload: productName
            })*/

        
            /*axios.get('http://localhost:4000/shoes')
                .then(res => {
                    dispatch({
                        type: ADD_PRODUCT_BASKET,
                        payload: res.data
                    }) 
                })*/

                
                /*.catch(error => {
                    console.log(error)
                })*/
            
    }
}


/*  Original

    dispatch({
            type: ADD_PRODUCT_BASKET,
            payload: productName
        })
        axios
            .get('http://localhost:4000/shoes')
            .then(res => 
                dispatch({
                    type: GET_SHOE_ITEMS,
                    payload: res.data
                })
            )
*/
