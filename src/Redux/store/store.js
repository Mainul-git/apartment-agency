
import { createStore } from "redux";
import apartmentReducer from "../reduces/apartmentReducer";
export const store = createStore(apartmentReducer);
