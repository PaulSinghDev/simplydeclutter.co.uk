import type { AppProps } from "next/app";
import { Colors, Fonts, Global } from "styles/index";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Fonts />
    <Colors />
    <Global />
    <Component {...pageProps} />
  </>
);

export default MyApp;
