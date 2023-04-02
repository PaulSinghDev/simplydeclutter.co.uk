import { Schema } from "components/Schema";
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
      <Schema
        type="LocalBusiness"
        name="Simply Declutter"
        image="https://simplydeclutter.co.uk/assets/images/logos/social-share-card.jpeg"
        telephone="07738129337"
        url={"https://simplydeclutter.co.uk"}
      />
      <Fonts />
      <Colors />
      <Global />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
