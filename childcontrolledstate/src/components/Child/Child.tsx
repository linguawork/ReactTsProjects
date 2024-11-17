import React, { useState } from "react";
import styles from './Child.module.css'

interface ChildProps{
    somefunction: (value:string) => void
}


const Child = ({somefunction}:ChildProps) =>{
    
    const [switching, setState] = useState<string>('OFF')


    // в функции меняем стейт на новую строку
    // здесь же вызываем пропс функции, которая в родителе будет присвоена функции родителя
    function switchFunction(){
        const newStr = 'ON value'
        setState( newStr)


        if(somefunction){
            //передали строку в родитлет
            somefunction(newStr)//Parent function will get string
        }
    }

    return (
        //when using modules.css, use {styles.btn}
        <div className={styles.btn}>
            <button onClick = {switchFunction}>
                Button: {switching}
            </button>
        </div>
    )
}

export default Child