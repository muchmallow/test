import {combineReducers, createStore, applyMiddleware} from "redux";
import {save, load} from "redux-localstorage-simple";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import cartReducer from "./cartReducer";
import loginReducer from "./loginReducer";
import marketReducer from "./marketReducer";

const reducers = combineReducers({
    cartPage: cartReducer,
    loginPage: loginReducer,
    marketPage: marketReducer,
    form: formReducer
});

const createStoreWithMiddleware = applyMiddleware(save({namespace: "test"}), thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(reducers, load({namespace: "test"}));

export default store;