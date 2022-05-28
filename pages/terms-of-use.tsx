import type { NextPage } from "next";
import { Meta, Nav, Footer } from "components";
import { useRouter } from "next/router";
import { pages, siteInfo, navLinks } from "data";

const Services: NextPage = () => {
  const { pathname } = useRouter();

  return (
    <div>
      <Meta
        title={pages.termsOfUse.title}
        description={pages.termsOfUse.description}
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
export default Services;
