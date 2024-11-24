import styled from "styled-components";

//https://spectrum.chat/styled-components/general/how-do-i-style-an-input-placeholder-with-styled-components~ebcb20d8-c1b4-4deb-ba6f-961fd976e58e
//не работает
export const NewTodo = styled.input`
  font-style: italic;
  ::placeholder {
    color: red;
  }

`;