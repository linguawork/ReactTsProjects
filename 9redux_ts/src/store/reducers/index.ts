import { combineReducers } from "redux";
import { userReducer } from "./userReducer";




export const rootReducer = combineReducers(
    {
        user: userReducer
    }
)


/*
Tаким образом определили типизацию RootState.
ReturnType<typeof rootReducer> (ссылка на ф, а не ее вызов)
позволяет присвоить 
возвращаемый тип данных функции rootReducer, не вдоваясь 
в подробности в сложную типизацию возвращаемого значения, а 
порой даже не зная этой сложной типизации, 
 новому типу RootState

 А новый тип RootState теперь такой же тип данных, который
 вернула  rootReducer
*/
export type RootState = ReturnType<typeof rootReducer>