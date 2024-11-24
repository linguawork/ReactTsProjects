import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components'

/* preproc JSX (babel transforms JSX into js with the 
 help of React, so it should be imported )

 if the elem can be written in one line, no round brackets needed
 However, if there are more than 1 line we need round brackets
*/

const Background = styled.div`
  background-color: lightgreen;
  display: flex;
  height: 100vh;
  align-content: center;
  justify-content: center;

`;

const Form = styled.form`
  /* grid-template-columns: 50% 50%; */
  /* grid-gap:10px; */
  background-color: white;
  display: grid;
  /*grid-auto-rows: minmax(50px, auto);*/
  height: 60vh;
  width: 70vh;
  padding: 10px;
  /*padding-left: 70px;*/
  /*padding-right: 50px;*/
  border-radius: 10px;
  align-self: center;
  justify-self: center;
  /* align-items: center; */
  /*justify-items: center;*/
  /* grid-auto-rows: minmax(auto, auto); */
`;

const HeaderDiv = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  padding: 20px;
  /* align-self: center;
  justify-self: center; */
  height: 7vh;
  /* width: 70vh; */
`;

const Btn = styled.button`
  grid-column-start:1;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 6;
  justify-self: left;
  background-color: #f5892a;
  color: white;
  padding: 5px 10px;
  /* outline: 0 !important;//почему-то не убирает серый фон кнопки
  border: 0;//почему-то не убирает серый фон кнопки
  padding: 0;//почему-то не убирает серый фон кнопки */
  /* text-transform: uppercase; */
`;


const MsgDiv = styled.div`
  display: grid;
  grid-column-start:1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
  height: 15vh;
  /* justify-self: center; */
  /* align-self: center; */


  
`;

const FieldContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 12px;
  padding: 10px
  /* grid-auto-rows: minmax(auto, auto); */


  
`;




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
  return <input type="tel" id="phone" placeholder = "Телефон"/>
  
}

const InputField4 = () => {
  
  return <input type="email" id="email" placeholder = "Email адрес"/>
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
  const p = <p>Отправить</p>

  //нельзя отправлять через объекты
  // const obj ={ }

  //можно ввести математику{3+4}
  return <button>Отправить</button>
}

const App = () =>{

  return(
  <Background>
    <Form>
      <HeaderDiv>
          <Header/>
      </HeaderDiv>
      <FieldContainer>
        <InputField1/>
        <InputField2/>
        <InputField3/>
        <InputField4/>
        <MsgDiv>
          <Message/>
        </MsgDiv>
        <Btn>
            <Button/>
        </Btn>
      </FieldContainer>

    </Form>
  </Background>
  )
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
//deleted ReactStrictMode
    <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
