import {combineReducers, createStore} from "redux";
import {counterReducer} from "./conter-reducer";

const rootReducer = combineReducers({
    counter: counterReducer
})


export const store = createStore(rootReducer)

type AppStoreType =typeof store

export type AppStateType = ReturnType<typeof rootReducer>