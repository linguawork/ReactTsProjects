
import React, { useState } from "react";

type ButtonProps = {
    counter?: number,
    // function in props
    increment?:()=> void,  
    decrement?: ()=>void
}

/*
Code review:
 Separate prop types for clarity, not to make optional keys
type Button1Props = {
    counter: number;
    increment: () => void;
};

type Button2Props = {
    decrement: () => void;
};



*/


const Button1 =( {counter, increment}: ButtonProps) => {

    return (
        <>
        <button onClick={increment}>
            press to add
        </button>
        <p>
           Counter: {counter}
        </p>
        
        </>
    )

}

const Button2 =( { decrement}: ButtonProps) => {

    return (
        <button onClick={decrement}>
            press to subtract
        </button>
    )

}




//parent does not need props!
const Parent = () =>{

    //parent will have the hook
    const [count, setCounter] = useState<number>(0)

    //parent will have the function definition
    //parent should have the function definition
    //child just uses it



    /*
    The setter function setCounter is automatically typed by 
    TypeScript as (value: number | ((prev: number) => number)) => void. 
    This signature is correct because useState supports:

    Direct updates, e.g., setCounter(5).
    Functional updates, e.g., setCounter((prev) => prev + 1).
    */
    function increment(){
        setCounter(
            prev => prev + 1
        ) 
    }


    function decrement(){
        setCounter(
            prev=> prev - 1
        )
    }


    return (
        //self made components should be wrapped inside an html tag
    <div>

        {/* 
            CODE REVIEW:
                This is a good practice.
                Best Practices: JSX Nesting:
                You have followed the best practice of wrapping 
                your components inside a single parent <div>. 
                This ensures React renders everything without errors.
        */}
            {/* //here we write exactly the same names of props and assign values from parent */}
            <Button1 counter={count} increment={increment}/>
            {/* if I have many buttons, it is better to use children
            the use with children is in previous commit */}
            <Button2 counter={count} decrement={decrement}/>

    </div>

    )

}

export default Parent

