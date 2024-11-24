import styled from 'styled-components'

export const Btn = styled.button`
  grid-column-start:1;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 6;
  justify-self: left;
  background-color: #f5892a;
  color: white;
  padding: 4px 10px;
  text-transform: uppercase;
  /* outline: 0 !important;//почему-то не убирает серый фон кнопки */
  border: 0;//убирает черную рамку вокруг кнопки
  padding: 3;//отступ границ кнопки от надписи на ней
  font-weight : bold ;

`;