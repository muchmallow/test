import {combineReducers, createStore, applyMiddleware} from "redux";
import {save, load} from "redux-localstorage-simple";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import cartReducer from "./cartReducer";
import loginReducer from "./loginReducer";
import marketReducer from "./marketReducer";
import {CLEAR_FORM} from "../components/FormConstants";

const reducers = combineReducers({
    cartPage: cartReducer,
    loginPage: loginReducer,
    marketPage: marketReducer,
    form: formReducer.plugin({
        ReduxLoginForm: (state, action) => {
            switch (action.type) {
                case CLEAR_FORM: {
                    return undefined;
                }
                default:
                    return state;
            }
        }
    })
});

const createStoreWithMiddleware = applyMiddleware(save({namespace: "test"}), thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(reducers, load({namespace: "test"}));

export default store;