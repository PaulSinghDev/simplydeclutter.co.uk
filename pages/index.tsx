import type { NextPage } from "next";
import {
  Card,
  Button,
  Footer,
  Header,
  Meta,
  Nav,
  Section,
  Services,
  Link,
} from "components";
import { useRouter } from "next/router";
import { pages, siteInfo, navLinks, testimonials, services } from "data";
import { Testimonials } from "components/Testimonials";
import { HTMLAttributes } from "react";
import styled from "styled-components";

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
        <h1>
          Regain control <br /> of your living space
        </h1>
        <Link url="/prices-services" title="View my services" asButton={true}>Read More</Link>
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
            <Link url="/about" title="Read about me" asButton={true}>Read About Me</Link>
          </div>
        </Section>
        <Section>
          <Testimonials testimonials={testimonials} />
        </Section>
        <Section>
          <Services
            services={services.filter((_s, i) => i < 4)}
            showButton={true}
          />
        </Section>
      </main>
      <Footer />
    </div>
  );
};
export default Home;
