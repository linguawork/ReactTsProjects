import { useDispatch, useSelector } from "react-redux"
import React, { useEffect } from 'react'
import { useTypedSelector } from "../hooks/useTypedSelector"
import { fetchUsers } from "../store/action-creators/user"
import { useActions } from "../hooks/useActions"


//component has type: React.FC
const UserList: React.FC =()=>{


/*
Property 'users' does not exist on type 'DefaultRootState'.

    useSelector() не работает с типами, поэтому лучше под 
    Тайпскрипт написать свой хук
*/  
    // const state = useSelector( state => state.user )

/*
Нетипизированный хук закомментили 
*/ 


/*
    типизированный хук 
*/   

/*Place cursor inside desctructuring object:{} and press CTRL+space, 
and you will see all the contents  */

//это содержание userReducer
    const {error, loading, users} = useTypedSelector( state => state.user )

    // console.log(state)

    //this dispatch is not used, when useActions is used
    // const dispatch = useDispatch()


    const {fetchUsers} = useActions()

    //executed func + [dependency]
    useEffect(
        ()=>{
            //dispatch(fetchUsers()), dispatch is not used, as we use useActions
            fetchUsers()
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
            {users.map(
                user=>
                <div key={user.id}>{user.name}</div>
            )}

        </div>
    )
}

export default UserList


