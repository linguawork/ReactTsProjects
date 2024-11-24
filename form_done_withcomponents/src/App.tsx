import React from 'react';

import { Background } from './components/Background/BackgroundStyle';
import { Form } from './components/Form/FormStyle';

import { Header } from './components/Header/Header';
import { HeaderDiv } from './components/Header/HeaderStyle';

import { FieldContainer } from './components/FieldContainer/FieldContainerStyle';
import { InputFieldName } from './components/InputFieldName/InputFieldName';
import { InputFieldSurname } from './components/InputFieldSurname/InputFieldSurname';
import { InputFieldPhone } from './components/InputFieldPhone/InputFieldPhone';
import { InputFieldEmail } from './components/InputFieldEmail/InputFieldEmail';

import { Message } from './components/Message/Message';
import { MsgDiv } from './components/Message/MessageStyle';

import { Button } from './components/Button/Button'; //CSS component is not imported

import { NewTodo } from './components/InputFieldEmail/InputFieldEmailStyle';

const App = () =>{

  return(
  <Background>
    <Form>
      <HeaderDiv>
          <Header/>
      </HeaderDiv>
      <FieldContainer>
        <InputFieldName/>
        <InputFieldSurname/>
        <InputFieldPhone/> 
        <InputFieldEmail/> 
        <MsgDiv>
          <Message/>
        </MsgDiv>
        <Button/>
      </FieldContainer>
    </Form>
  </Background>
  )
}

export default App;
