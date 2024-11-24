
import styled from "styled-components";

/**
 * 
 The code source is 
 from youtube:
 https://www.youtube.com/watch?v=YJ9Q6Je4WSw&list=PLYlfM6qKBI5jlMnSRMPugFl29qUFzM7W7&index=1
 
  I wrote button only (the rest of the content is extra) 

  Need to learn CSS to understand what is written in the button 

 this block is about css
 class styled used method button
 class is assigned to StyledButton variable
 */
const StyledButton = styled.button`
padding: 7px 10px;
outline: none;
background: #7900ff;
border: 2px solid #7900ff;
color: #cfffdc;
cursor: pointer;
margin: 2px;

&:hover {
    background: #cfffdc;
    color: #0f0e11;
  }
`;

/**
 functional expression is assigned a function
 which returns tag <StyledButton>
 */
const Button = () =>{
    return <StyledButton>My First Button</StyledButton>;
};

//export Button
export default Button;

