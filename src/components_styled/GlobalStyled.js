import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
    body {
        font-family: 'Poppins', sans-serif;  
        margin: 0;
        padding: 0;
        background-color: #727272;
    }   
    html {
        scroll-behavior: smooth;
    }
`;

export default GlobalStyles;