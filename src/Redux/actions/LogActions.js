export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const signin = (name,email) => { 
    return {type:SIGN_IN, name,email }
}

export const signout = cartId => {
    return {type:SIGN_OUT, cartId}
}