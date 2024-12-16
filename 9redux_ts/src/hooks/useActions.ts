/*
этот хук позволяет не использовать dispatch 
и вместо него использовать useActions в тех куда мы его импортируем

*/
//23:12 - 24:26

import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"

/*
    все actions импортируется в переменную ActionCreators, 
    
*/
import ActionCreators from '../store/action-creators/'

//docs about useActions hook in redux: https://react-redux.js.org/api/hooks


/*
cуть хука в том, что связываем все actionСreator functions with
this dispatch function
*/
export const useActions = () =>{
    const dispatch = useDispatch()

    //this is to test
    // console.log(ActionCreators)

// вызываем action creators они сами прокинуться в dispatch,
// dispatch даже не понадобится
    return bindActionCreators(ActionCreators, dispatch)
}




