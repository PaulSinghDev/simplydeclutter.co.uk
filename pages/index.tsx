import type { NextPage } from "next";
import { Footer, Meta, Nav } from "components";
import { useRouter } from "next/router";
import { pages, siteInfo, navLinks } from "data";

const Home: NextPage = () => {
  const { pathname } = useRouter();

  return (
    <div>
      <Meta
        title={pages.index.title}
        url={`${siteInfo.url}${pathname}`}
        description={pages.index.description}
        siteName={siteInfo.siteName}
        favicon={siteInfo.favicon}
      />
      <Nav links={navLinks} />
      <main />
      <Footer />
    </div>
  );
};
export default Home;
