import { createGlobalStyle } from "styled-components";

export const Fonts = createGlobalStyle`
    @font-face {
        font-family: Montserrat;
        src: url('/assets/fonts/Montserrat-VariableFont.ttf') format('truetype'),
            url('/assets/fonts/Montserrat-VariableFont.woff2') format('woff2');
        font-display: swap;
    }
    @font-face {
        font-family: Roboto;
        src: url('/assets/fonts/RobotoFlex-VariableFont.ttf') format('truetype'),
            url('/assets/fonts/RobotoFlex-VariableFont.woff2') format('woff2');
        font-display: swap;
    }
`;
