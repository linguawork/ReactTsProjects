import { useSelector } from "react-redux"
import React from 'react'
import { useTypedSelector } from "../hooks/useTypedSelector"

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


    return (
        <div>

        </div>
    )
}

export default UserList

