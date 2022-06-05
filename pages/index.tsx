import type { NextPage } from "next";
import { Button, Footer, Header, Meta, Nav, Section } from "components";
import { useRouter } from "next/router";
import { pages, siteInfo, navLinks } from "data";
import { Testimonial, Testimonials } from "components/Testimonials";

const TESTIMONIALS: Testimonial[] = [
  {
    author: "H. Someone",
    comment:
      "This is my review which has a really long line and should wrap down.",
    platform: "Tripadvisor",
    url: "https://tripadvisor.com/",
  },
  {
    author: "H. Someone Else",
    comment: "This is my other review",
    platform: "Facebook",
    url: "https://facebook.com/",
  },
];

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
      <Header fullHeight={true}>
        <picture>
          <img src="/assets/images/logos/full-logo-blue-700.svg" />
        </picture>
        <h1>Professionally declutter and organise your home</h1>
        <Button>Read More</Button>
      </Header>
      <main>
        <Section className="image-with-text">
          <div className="image">
            <picture>
              <img src="/assets/images/examples/bathroom-flower-basket.jpg" />
            </picture>
          </div>
          <div className="text">
            <h2>Professionally Declutter and Organise Your Home with Hilary</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button>Read About Me</Button>
          </div>
        </Section>
        <Testimonials testimonials={TESTIMONIALS} />
      </main>
      <Footer />
    </div>
  );
};
export default Home;
