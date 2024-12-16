import React from "react"
import { useEffect } from "react"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { fetchTodos } from "../store/action-creators/todo"


const TodoList: React.FC = () =>{
    const {page, loading, error, todos, limit} = useTypedSelector(state=>state.todo)
    const {fetchTodos} = useActions()

    useEffect(
        ()=>{
            //dispatch(fetchUsers()), dispatch is not used, as we use useActions
            fetchTodos(page, limit)
        }, [])


    if(loading){
        return (
            <h1>Loading...</h1>
        )
    }
    if(error){
        return(
            <h1>Loading error: {error}</h1>
        )
    }







    return (
        <div>
            {todos.map( el=>
            <div key={el.id}>{el.id} - {el.title}</div>
            )}

        </div>
    )

}

export default TodoList