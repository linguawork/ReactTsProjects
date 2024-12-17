import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { todoReducer } from "./todoReducer";

export const rootReducer = combineReducers(
    { 
        //user который будет в хуке, которому мы передали возвращаемый тип данныч
        //у user значение все что есть в функции userReducer
        user: userReducer,
        todo: todoReducer
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

 Этот тип будет использован с типизированным useSelector, 
 который по умолчанию не работает с типами
*/
export type RootState = ReturnType<typeof rootReducer>