import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./conter-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    counter: counterReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))

type AppStoreType =typeof store

export type AppStateType = ReturnType<typeof rootReducer>