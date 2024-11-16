
import React, { useState } from "react";


// const Button1 =( counter, increment()) => {

//     function increment(){
//         setState(prevState => prevState + 1)
//     }
//     return (
//         <button>
//             counter: {counter}
//         </button>
//     )

// }


type ParentProps = {
    counter: number
    // increment: ()=>void, 
    // decrement: ()=>void
}

const Parent = ({counter}: ParentProps) =>{

    //parent will have the hook
    const [count, setCounter] = useState(0)

    function increment(){
        setCounter(
            prev=> prev+1
        )
    }

    return (

        //two buttons that will increment and decrement
        // <Button1 counter={counter} onClick = increment() />

        <button onClick={increment}>
            counter: {count}
        </button> 

    )

}

export default Parent