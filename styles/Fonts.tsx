import { createGlobalStyle } from "styled-components";

export const Fonts = createGlobalStyle`
    @font-face {
        font-family: Montserrat;
        src: url('/assets/fonts/Montserrat-Regular.ttf') format('truetype');
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }
    @font-face {
        font-family: Roboto;
        font-style: normal;
        font-weight: 400;
        src: url('/assets/fonts/Roboto-Regular.ttf') format('truetype');
        font-display: swap;
    }
    @font-face {
        font-family: Montserrat;
        src: url('/assets/fonts/Montserrat-Italic.ttf') format('truetype');
        font-style: italic;
        font-weight: 400;
        font-display: swap;
    }
    @font-face {
        font-family: Roboto;
        font-style: italic;
        font-weight: 400;
        src: url('/assets/fonts/Roboto-Italic.ttf') format('truetype');
        font-display: swap;
    }
    @font-face {
        font-family: Montserrat;
        src: url('/assets/fonts/Montserrat-Bold.ttf') format('truetype');
        font-style: bold;
        font-weight: 900;
        font-display: swap;
    }
    @font-face {
        font-family: Roboto;
        font-style: bold;
        font-weight: 900;
        src: url('/assets/fonts/Roboto-Bold.ttf') format('truetype');
        font-display: swap;
    }
`;
