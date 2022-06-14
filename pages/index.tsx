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

interface HomeWhyMeSectionProps extends HTMLAttributes<HTMLDivElement> {}

const HomeWhyMeSection: React.FC<HomeWhyMeSectionProps> = ({ ...rest }) => {
  return (
    <StyledHomeWhyMeSection {...rest}>
      <h2>Why Choose Me</h2>
      <div className="home-why-me-cards">
        <Card
          background={"var(--off-white)"}
          text={{ color: "var(--purple)" }}
          shadow={true}
          title="Free Consultation"
          content={[
            "If you are ready to declutter and regain  control of your living space we can arrange a free 1 to 1 Zoom consultation right away!",
          ]}
        ></Card>
        <Card
          background={"var(--off-white)"}
          text={{ color: "var(--purple)" }}
          shadow={true}
          title="Fair Pricing"
          content={[
            "Pricing starts at £35 per hour with a minimum of 3 hours per job.",
          ]}
        ></Card>
      </div>
      <Link url="/prices-services#prices" asButton={true}>
        View Pricing
      </Link>
    </StyledHomeWhyMeSection>
  );
};

const StyledHomeWhyMeSection = styled.div`
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;

  > h2 {
    color: var(--purple);
  font-size: 2rem;
  }

  > .home-why-me-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;

    > div {
      max-width: 300px;
      min-width: 250px;
    }
  }

  > a {
    margin-top 24px;
    display: inline-block;
    background-color: var(--purple);
    font-weight: bold;
  }
`;

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
        <Section>
          <Testimonials testimonials={testimonials} />
        </Section>
        <Section>
          <Services
            services={services.filter((_s, i) => i < 4)}
            showButton={true}
          />
        </Section>
        <Section>
          <HomeWhyMeSection />
        </Section>
      </main>
      <Footer />
    </div>
  );
};
export default Home;
