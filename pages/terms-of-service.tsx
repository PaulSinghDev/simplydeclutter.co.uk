import type { NextPage } from "next";
import { Meta, Nav, Footer } from "components";
import { useRouter } from "next/router";
import { pages, siteInfo, navLinks } from "data";

const TermsOfService: NextPage = () => {
  const { pathname } = useRouter();

  return (
    <div>
      <Meta
        title={pages.termsOfService.title}
        description={pages.termsOfService.description}
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
export default TermsOfService;
