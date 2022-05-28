import type { NextPage } from "next";
import { Footer, Meta, Nav } from "components";
import { useRouter } from "next/router";
import { pages, siteInfo, navLinks } from "data";

const About: NextPage = () => {
  const { pathname } = useRouter();

  return (
    <div>
      <Meta
        title={pages.about.title}
        description={pages.about.description}
        url={`${siteInfo.url}${pathname}`}
        siteName={siteInfo.siteName}
        favicon={siteInfo.favicon}
      />
      <Nav links={navLinks} />
      <main />
      <Footer />
    </div>
  );
};
export default About;
