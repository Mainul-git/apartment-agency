
import { createStore } from "redux";

import LoginReducer from "../reduces/LoginReducer";

export const store = createStore(LoginReducer);