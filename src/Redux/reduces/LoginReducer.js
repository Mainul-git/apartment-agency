import { SIGN_IN, SIGN_OUT } from "../actions/LogActions";
let initialState = {
    user:{}
}

const LoginReducer = (state = initialState, action) =>{
  
    switch(action.type){
        case SIGN_IN:
            const newItem = {
                productId: action.id, 
                name: action.name,
                cartId: state.cart.length + 1
            }
            const newCart = [...state.cart, newItem];
            return {...state, cart: newCart};

        case SIGN_OUT:
            const cartId = action.cartId;
            const remainingCart = state.cart.filter(item => item.cartId !== cartId);
            return {...state, cart: remainingCart}

        default:
            return state;
    }
}
export default LoginReducer;