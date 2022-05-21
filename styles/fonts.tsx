import { createGlobalStyle } from "styled-components";

export const Fonts = createGlobalStyle`
    @font-face {
        font-family: Montserrat;
        src: url('/assets/fonts/Montserrat-VariableFont_wght.ttf') format('truetype'),
            url('/assets/fonts/Montserrat-VariableFont_wght.woff2') format('woff2');
        font-display: swap;
    }
`;
