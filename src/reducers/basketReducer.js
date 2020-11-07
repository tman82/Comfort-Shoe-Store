import { ADD_PRODUCT_BASKET, GET_SHOE_ITEMS, GET_NUMBERS_BASKET,
          ITEMS_LOADING } from '../actions/types'
//import axios from 'axios'

const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    shoeItems: [],
    loading: false,
    
    /*items: {
      shoeOne: {id: 1, name: 'Shoe1', price: 120},
      shoeTwo: {id: 2, name: 'Shoe2', price: 120},
      shoeThree: {id: 3, name: 'Shoe3', price: 120},
      shoeFour: {id: 4, name: 'Shoe4', price: 120}
    }*/
    
    
    
      products: {

        blackOne: {
            name: "Black One",
            price: 120,
            numbers: 0,
            inCart: false
          },

          blackThree: {
            name: "Black Three",
            price: 120,
            numbers: 0,
            inCart: false
          },
          
          blackFour: {
            name: "Black Four",
            price: 120,
            numbers: 0,
            inCart: false
          },
          
          blackFive: {
            name: "Black Five",
            price: 120,
            numbers: 0,
            inCart: false
          },

          blackSix: {
            name: "Black Six",
            price: 120,
            numbers: 0,
            inCart: false
          },
          
          blackSeven: {
            name: "Black Seven",
            price: 180,
            numbers: 0,
            inCart: false
          },
          
          blueOne: {
            name: "Blue One",
            price: 180,
            numbers: 0,
            inCart: false
          },
          
          blueTwo: {
            name: "Blue Two",
            price: 120,
            numbers: 0,
            inCart: false
          },
          
          blueThree: {
            name: "Blue Three",
            price: 180,
            numbers: 0,
            inCart: false
          },
          
          brownOne: {
            name: "Brown One",
            price: 120,
            numbers: 0,
            inCart: false
          },
          
          brownTwo: {
            name: "Brown Two",
            price: 180,
            numbers: 0,
            inCart: false
          },
          
          brownThree: {
            name: "Brown Three",
            price: 120,
            numbers: 0,
            inCart: false
          },
          
          grayOne: {
            name: "Gray One",
            price: 120,
            numbers: 0,
            inCart: false
          },
          
          grayTwo: {
            name: "Gray Two",
            price: 180,
            numbers: 0,
            inCart: false
          },
          
          grayThree:{
            name: "Gray Three",
            price: 120,
            numbers: 0,
            inCart: false
          },
          
          greenOne: {
            name: "Green One",
            price: 180,
            numbers: 0,
            inCart: false
          },
          
          greenTwo: {
            name: "Green Two",
            price: 120,
            numbers: 0,
            inCart: false
          },
          
          greenThree: {
            name: "Green Three",
            price: 180,
            numbers: 0,
            inCart: false
          },
          
          plaidOne: {
            name: "Plaid One",
            price: 120,
            numbers: 0,
            inCart: false
          },
          
          plaidTwo: {
            name: "Plaid Two",
            price: 120,
            numbers: 0,
            inCart: false
          },
          
          plaidThree: {
            name: "Plaid Three",
            price: 120,
            numbers: 0,
            inCart: false
          },
          
          redOne: {
            name: "Red One",
            price: 180,
            numbers: 0,
            inCart: false
          },
          
          whiteOne: {
            name: "White One",
            price: 120,
            numbers: 0,
            inCart: false
          },
          
          whiteTwo: {
            name: "White Two",
            price: 120,
            numbers: 0,
            inCart: false
          },
          
          whiteThree: {
            name: "White Three",
            price: 120,
            numbers: 0,
            inCart: false
          },
          
          whiteFour: {
            name: "White Four",
            price: 120,
            numbers: 0,
            inCart: false
          },
          
          whiteFive: {
            name: "White Five",
            price: 120,
            numbers: 0,
            inCart: false
          },
          
          whiteSix: {
            name: "White Six",
            price: 180,
            numbers: 0,
            inCart: false
          },
          
          whiteSeven: {
            name: "White Seven",
            price: 200,
            numbers: 0,
            inCart: false
          }
        
      }
    
} 


/*
export default (state = initialState, action) => {
  switch(action.type) {
      case ADD_PRODUCT_BASKET:
        let addQuantity = { ...state.products[action.payload] }
        console.log(addQuantity)
        
          return {
            ...state,
            basketNumbers: state.basketNumbers + 1
          }
      case GET_NUMBERS_BASKET:
          return {
              ...state
          }
      case GET_SHOE_ITEMS:
          return {
            ...state
          }
      default:
          return state
  }
} */



export default function basketReducer(state = initialState, action) {
    switch(action.type) {

        case ADD_PRODUCT_BASKET:
          let addQuantity = { ...state.products[action.payload] }
          console.log(addQuantity)
          addQuantity.numbers += 1
          addQuantity.inCart = true
          console.log(addQuantity)
          
            return {
              ...state,
              basketNumbers: state.basketNumbers + 1,
              //shoeItems: action.payload,
              cartCost: state.cartCost + state.products[action.payload].price,
              products: {
                ...state.products,
                [action.payload]: addQuantity
              }
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        case GET_SHOE_ITEMS:
            return {
              ...state,
              shoeItems: [action.payload, ...state.shoeItems],
              loading: false
            }
        case ITEMS_LOADING:
            return {
              ...state,
              loading: true
            }
        default:
            return state
    }
} 

