import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers";
/**
    Создаем useSelector() хук но тот который рабоатет с типaми

    Нужно написать название хука и придать ему тип
    TypedUseSelectorHook, который импортируем из react-redux
    и ему уже присваиваем тип данных RootState, 
    который мы взяли из возвращаемого значения rootReducer
 */


 export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector