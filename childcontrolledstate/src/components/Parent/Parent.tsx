
import React from "react";
import Child from "../Child/Child";

const Parent =() =>{
    
    function parentSwitcher(value:string) {
        console.log("Switched in parent", value )     
    }

    return (
        <div>
            <Child somefunction={parentSwitcher}/>
        </div>

    )
}


export default Parent