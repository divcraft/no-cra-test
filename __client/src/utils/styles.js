import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
   ${normalize}
   body {
      background-color: rgb(56, 56, 56);
      color: white;
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.5;
      & #root {
         display: flex;
         justify-content: center;
         align-items: center;
         height: 70vh;
         min-height: 500px;
      }
   }
`;

export const theme = {};
