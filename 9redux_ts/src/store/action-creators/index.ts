//the file to unite all action creators into one 
// one for user and for todolist

//all the exports (for user and todo) into one file for user
import * as UserActionCreators from './user'
import * as TodoActionCreators from './todo'

//exporting all the action creators
export default {
    ...UserActionCreators, 
    ...TodoActionCreators
}


