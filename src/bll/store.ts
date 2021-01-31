import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./conter-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    counter: counterReducer
})

let preloadedState;
const persistedStateString = localStorage.getItem('app-state')

if(persistedStateString) {
    preloadedState=JSON.parse(persistedStateString)
}
export const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk))



store.subscribe(()=>{
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
    // localStorage.setItem('value', JSON.stringify(store.getState().counter.value))
})





type AppStoreType =typeof store

export type AppStateType = ReturnType<typeof rootReducer>