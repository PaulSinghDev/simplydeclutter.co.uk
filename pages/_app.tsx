import type { AppProps } from "next/app";
import { Colors, Fonts, Global } from "styles/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Fonts />
      <Colors />
      <Global />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
