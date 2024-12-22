import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";


// Типизированный хук, который работает с методом dispatch из Store.
// Он предоставляет типизированную версию dispatch с учетом типов самого Store,
// включая доступ к методам, таким как dispatch и getState.
export const useAppDispatch = () => useDispatch<AppDispatch>()


/*
    Типизированный хук — это хорошее начало, но важно уточнить, 
    что этот хук будет типизировать не только сам dispatch, 
    но и обеспечить доступ ко всем типам, связанным с хранилищем 
    (например, dispatch и getState).

    AppDispatch — правильно упомянуто, что хук будет работать с типом AppDispatch,
    который вы определяете в своем store и который включает 
    в себя типизацию для dispatch.

    Функция — добавлена скобка () после useDispatch<AppDispatch>, 
    чтобы это было правильно типизированным хелпером.
*/

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;