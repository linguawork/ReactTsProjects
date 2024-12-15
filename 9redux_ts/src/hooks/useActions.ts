/*
этот хук позволяет не использовать dispatch 
и вместо него использовать useActions в тех куда мы его импортируем

*/
//23:12 - 24:26

import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"

/*
    все что импортируется вкладывается в переменную, 
    из которой можно вызвать через точку нужный код, например:
    UserActionCreators.fetchUsers();
    UserActionCreators.fetchUsersSuccess(users); (это к примеру)
    UserActionCreators.fetchUsersError(error);
*/
import * as UserActionCreators from '../store/action-creators/user'

//docs about useActions hook in redux: https://react-redux.js.org/api/hooks


/*
cуть хука в том, что связываем все actionСreator functions with
this dispatch function
*/
export const useActions = () =>{
    const dispatch = useDispatch()

// вызываем action creators они сами прокинуться в dispatch,
// dispatch даже не понадобится
    return bindActionCreators(UserActionCreators, dispatch)
}




