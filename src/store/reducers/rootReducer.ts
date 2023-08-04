import { ActionReducerMap } from "@ngrx/store";
import { loggedInReducer } from "./userReducer";



export const RootReducer: ActionReducerMap<any> = {
    userState:loggedInReducer
}