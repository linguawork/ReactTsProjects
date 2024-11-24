import React from "react";
import { Btn } from "./ButtonStyle";

export const Button = () =>{
  
    //можно вывести через {text}
    const text = "Отправить"
     //можно вывести через {res()}
    const res = () =>{
      return "Отправить!!!"
    }
     //можно вывести через paragraph
    const p = <p>Отправить</p>
  
    //нельзя отправлять через объекты
    // const obj ={ }
  
    //можно ввести математику{3+4}
    //return <button>Отправить</button>
    return <Btn>{text}</Btn> // лучше сразу возвращать компонент CSS
    //и тогда нет нужды оборачивать 
    // и нет нужды импортировать в App CSS component
    // и в App нет нужды писать обертки СSS
  }