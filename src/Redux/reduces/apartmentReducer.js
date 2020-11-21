import { ADD_APARTMENT } from "../actions/apartmentActions"

const initialState = {
    apartment:{ }
  
}
console.log('dekhi')
if(Object.keys(initialState.apartment).length>0){
    console.log('dhurbal kaj kor',initialState.apartment)
}
const ApartmentReducer = (state = initialState, action) =>{
  
    switch(action.type){
        case ADD_APARTMENT:
            // const newApartment ={
            //     title: action.title,
            //     location: action.location,
            //     bedroom: action.bedroom,
            //     bathroom: action.bathroom,
            //     price: action.price,
            //     Primaryimage: action.Primaryimage,
            // }
            // console.log(newApartment)
            // const updatedApartment =[...state.apartment,newApartment]
            return {...state, apartment:action.apartment};


        default:
            return state;
    }
}
export default ApartmentReducer;