

const initialState = {
    value: 0
}

type InitialStateType = typeof initialState

export const counterReducer =(state:InitialStateType =initialState, action: ActionsType): InitialStateType=> {
    switch(action.type) {
        case "INC-VALUE":
            return {
            ...state, value: state.value+1
        }
        case "SET-VALUE_FROM_LOCAL_STORAGE":
            return {
                ...state, value:action.value
            }
        default:  return  state
    }

}

export const incValueAC =()=>( {type: 'INC-VALUE'} as const)
export const setValueFromLocalStorageAC =(value: number)=>( {type: 'SET-VALUE_FROM_LOCAL_STORAGE', value} as const)

export type IncValueActionType = ReturnType<typeof incValueAC>
export type SetValueFromLocalStorageActionType = ReturnType<typeof setValueFromLocalStorageAC>

type ActionsType = IncValueActionType | SetValueFromLocalStorageActionType