import { useSelector } from "react-redux"
import React from 'react'

const UserList: React.FC =()=>{

    const state = useSelector( state => state )
    console.log(state)
    console.log('HHHHHHHHHHHHHHHHHHH')

    return (
        <div>

        </div>
    )
}

export default UserList