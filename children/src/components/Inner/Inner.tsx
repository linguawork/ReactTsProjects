import React from 'react'

interface Form{
    name: string, 
    surname: string
}

//arrow functions are a common practice
const Inner = (props:Form) => {

    const { name, surname } = props
    
return (
    <div className='inner'>
        <h1>{name}</h1>
        <input type="text" />
        <h1>{surname}</h1>
        <input type="text" />
    </div>
)
}

export default Inner