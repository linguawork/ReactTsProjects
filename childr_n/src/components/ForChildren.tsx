import React from "react";


interface InterChildren{
    name: string, 
    /*if you need to use children in React Ts, you have to
    add them in your interface 
    and give the type: React.ReactNode
    */
    children?: React.ReactNode   
    
    /**
     * Optional children:
     This avoids potential TypeScript errors 
     when children is not provided.
     
    */
}


function ForChildren({name, children}: InterChildren){
    return (
        <div className="for_children">
            <a href="https://www.youtube.com/watch?v=eP4qtu4IsGE&list=PLYlfM6qKBI5gHd6qevYUWQfL-TAWp5NW6&index=6" target="blank"> Video about children in TS</a>
            <br/>
            <br/>
            This is the name string from Interface with the value: {name}.
            {children}   
        </div>
        
    )
}

export default ForChildren