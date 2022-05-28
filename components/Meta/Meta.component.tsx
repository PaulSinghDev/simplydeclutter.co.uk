import Head from "next/head";
import { HTMLAttributes } from "react";

interface MetaProps extends HTMLAttributes<HTMLHeadElement> {
  title: string;
  description: string;
  url: string;
  favicon?: string;
  siteName: string;
}

const Meta: React.FC<MetaProps> = ({
  url,
  title,
  description,
  siteName,
  favicon,
  ...rest
}) => {
  return (
    <Head {...rest}>
      <meta name="robots" content="index, follow" />
      <title>{title}</title>
      <meta name="twitter:title" content={title} />
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <link rel="icon" href={!!favicon ? favicon : "/favicon.ico"} />
    </Head>
  );
};

export { Meta };
