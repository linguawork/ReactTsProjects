
import React, { useState } from "react";

type ButtonProps = {

    increment:()=> void, 
    //children needed to write in
    children: React.ReactNode
    // decrement: ()=>void
}


const Button1 =( { increment, children}: ButtonProps) => {

    return (
        <button onClick={increment}>
            {children}
        </button>
    )

}



//parent does not need props
const Parent = () =>{

    //parent will have the hook
    const [count, setCounter] = useState(0)

    //parent will have the function definition
    function increment(){
        setCounter(
            prev=> prev+1
        )
    }

    return (
        //self made components should be wrapped inside an html tag
    <div>
            {/* //here we write exactly the same names of props and assign values from parent */}
            <Button1  increment={increment}>
                Counter: {count}
            </Button1> 
    </div>

    )

}

export default Parent