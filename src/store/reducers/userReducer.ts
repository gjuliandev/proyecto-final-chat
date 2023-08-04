
import { ACTION_SET_CURRENT_USER } from "../action/appActions";
import  IAppReducerState  from "../state/IAppReducerState";

const initialState: IAppReducerState = {
    user: ''
}


export function loggedInReducer ( state = initialState, action: any): IAppReducerState {

    if (action.type === 'ACTION_SET_CURRENT_USER') {
        return {
            ...state, user:  action.payload
        }
    }
   
    return state
}