import React, {useEffect, useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {incValueAC} from "./bll/conter-reducer";

function App() {

 const value = useSelector<AppStateType, number>(state=>state.counter.value)
const dispatch = useDispatch()

    const incHandler = () => {
        dispatch(incValueAC())
    }




    // const [value, setValue] = useState<number>(0)
    //
    // useEffect(()=> {
    //
    //         let valueAsString = localStorage.getItem('counterValue')
    //         if (valueAsString) {
    //             let newValue = JSON.parse(valueAsString)
    //             setValue(newValue)
    //         }
    //
    // },[])
    //
    // useEffect(()=> {
    //     localStorage.setItem('counterValue', JSON.stringify(value))
    // },[value])
    //
    // const incHandler = () => {
    //     setValue(value + 1)
    // }
    // const setToLocalStorageHandler = () => {
    //     localStorage.setItem('counterValue', JSON.stringify(value))
    //     localStorage.setItem('counterValue+1', JSON.stringify(value+1))
    // }
    //
    //
    // const clearLocalStorageHandler =()=> {
    //     localStorage.clear()
    //     setValue(0)
    // }
    //
    // const removeLocalStorageHandler=()=> {
    //     localStorage.removeItem('counterValue+1')
    // }
    //
    // const getFromLocalStorageHandler = () => {
    //     let valueAsString = localStorage.getItem('counterValue')
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         setValue(newValue)
    //     }
    //
    // }
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            {/*<button onClick={setToLocalStorageHandler}>setToLocalStorage</button>*/}
            {/*<button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>*/}
            {/*<button onClick={clearLocalStorageHandler}>clearLocalStorage</button>*/}
            {/*<button onClick={removeLocalStorageHandler}>removeLocalStorage</button>*/}
        </div>
    );
}

export default App;
