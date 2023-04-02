import Script from "next/script";
import React from "react";

interface SchemaProps {
  type: string;
  name: string;
  image: string;
  url: string;
  telephone: string;
}
const Schema: React.FC<SchemaProps> = ({
  type,
  name,
  image,
  url,
  telephone,
}) => {
  const generateSchemaContent = () => ({
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": type,
      name,
      url,
      image,
      telephone,
    }),
  });
  return (
    <Script
      id="main-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={generateSchemaContent()}
    />
  );
};

export { Schema };
