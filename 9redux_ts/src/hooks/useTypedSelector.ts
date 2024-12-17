import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers";
/**
Все рецепты хуков есть в документации:
https://react-redux.js.org/using-react-redux/usage-with-typescript#typing-the-useselector-hook

    Создаем useSelector() хук но тот который рабоатет с типaми

    Нужно написать название хука и придать ему тип
    TypedUseSelectorHook, который импортируем из react-redux
    и ему уже присваиваем тип данных RootState, 
    который мы взяли из возвращаемого значения rootReducer
*/


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector