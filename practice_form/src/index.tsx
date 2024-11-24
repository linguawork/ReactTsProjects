import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



/* preproc JSX (babel transforms JSX into js with the 
 help of React, so it should be imported )

 if the elem can be written in one line, no round brackets needed
 However, if there are more than 1 line we need round brackets
*/



const Header = () => {
  return <h2>Форма отправки сообщений</h2>
}

const InputField1 = () => {

  return <input type="text" id="first-name" placeholder="Имя"/>
}

const InputField2 = () => {
  return <input type="text" id="last-name" placeholder="Фамилия"/>
}

const InputField3 = () => {
  return <input type="email" id="email" placeholder="Email адрес"/>
}

const InputField4 = () => {
  return <input type="tel" id="phone" placeholder="Телефон"/>
}

const Message = () =>{
  return <textarea  id="message" placeholder="Сообщение"></textarea>
}

const Button = () =>{
  //можно вывести через {text}
  const text = "Отправить"
   //можно вывести через {res()}
  const res = () =>{
    return "Отправить!!!"
  }
   //можно вывести через paragraph
  const p = <p>Send</p>

  //нельзя отправлять через объекты
  // const obj ={ }

  //можно ввести математику{3+4}
  return <button type="submit">{text}</button>
}

const App = () =>{

  return(
  <div>
    <Header/>
    <InputField1/>
    <InputField2/>
    <InputField3/>
    <InputField4/>
    <Message/>
    <Button/>
  </div>
  )
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
//deleted ReactStrictMode
    <App/>

);

