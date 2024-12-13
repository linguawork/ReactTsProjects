import { useSelector } from "react-redux"
import React from 'react'

const UserList: React.FC =()=>{


/*
Property 'users' does not exist on type 'DefaultRootState'.

    useSelector() не работает с типами, поэтому лучше под 
    Тайпскрипт написать свой хук
*/  
    const state = useSelector( state => state.users )
    console.log(state)


    return (
        <div>

        </div>
    )
}

export default UserList

