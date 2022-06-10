import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Colors, Fonts, Global } from "styles/index";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--vh",
      `${window.innerHeight * 0.01}px`
    );
  });
  return (
    <>
      <Fonts />
      <Colors />
      <Global />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
