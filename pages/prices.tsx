import type { NextPage } from "next";
import { Meta, Nav } from "components";
import { useRouter } from "next/router";
import { pages, siteInfo, navLinks } from "data";

const Prices: NextPage = () => {
  const { pathname } = useRouter();

  return (
    <div>
      <Meta
        title={pages.prices.title}
        description={pages.prices.description}
        url={`${siteInfo.url}${pathname}`}
        siteName={siteInfo.siteName}
        favicon={siteInfo.favicon}
      />
      <Nav links={navLinks} />
      <main />
      <footer />
    </div>
  );
};
export default Prices;
