import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-feature-settings: "kern" 1;
        font-kerning: normal;
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

        background: linear-gradient(var(--off-white-pink),var(--off-white));
        letter-spacing: 0.4px;
        line-height: 1.4;
    }
    
    h1, 
    h2, 
    h3, 
    h4, 
    h5, 
    h6 {
        font-weight:bold;
        font-family: Roboto;
    }
    
    html {
        scroll-behavior: smooth;
    }

    h1 {
        color: var(--blue);
    }

    a {
        color: inherit;
        text-decoration: none;
        transition: 0.3s ease;
        border-radius: 16px;

        &:hover {
            background-color: var(--off-black);
            color: var(--off-white);
        }
    }

    main {
        max-width: 900px;
        margin: auto;
    }

    button {
        appearance: none;
        background: none;
        border: none;
        margin: 0;
        padding: 0;
        letter-spacing: 0.4px;
        font-family: Montserrat;
        font-weight: 900;
        cursor: pointer;
    }
`;
