import styled from "styled-components";
import type { NextPage } from "next";
import { Footer, Link, Meta, Nav, Section } from "components";
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
      <main>
        <StyledSection>
          <picture>
            <img src="/assets/images/photos/stock-photo-lady.jpeg" />
          </picture>
          <h1>About Me</h1>
          <p>
            My name is Hilary and I love helping people to Declutter and
            organise their life spaces.
          </p>
          <p>
            Whether it is your whole house or just one particular area I can
            help you free up space and organise your belongings to give you a
            space you feel happy to be in.
          </p>
          <p>
            I like to get to know my clients and work with them to organise
            their homes to suit their lifestyle. Our first meeting can be by
            telephone, Facetime or a zoom call just to have a chat about what
            you are hoping to achieve.
          </p>
          <p>
            My aim is to help you get organised and declutter without added
            stress. I can work with you as a team or simply under your guidance.
          </p>
          <p>
            I appreciate that you may be apprehensive about inviting someone
            into your home and laying open your life however I am on your side
            and I want to help.
          </p>
          <p>
            We all have different talents and it just happens that mine is
            decluttering and organising.
          </p>
          <p>
            I will help, not judge I will declutter at your pace I will respect
            your things and your decisions I will make the process of
            decluttering and organising a positive experience. I will help you
            decide where to take items you no longer want.
          </p>
          <div className="button-row">
            <Link asButton={true} url="/services">
              Services
            </Link>
            <Link asButton={true} url="/pricing">
              Pricing
            </Link>
          </div>
        </StyledSection>
      </main>
      <Footer />
    </div>
  );
};

const StyledSection = styled(Section)`
  color: var(--blue);
  margin-top: var(--nav-height);
  > picture {
    display: block;
    max-width: 200px;
    width: 60%;
    margin: auto;

    > img {
      border-radius: 24px;
      max-width: 100%;
      height: auto;
    }
  }

  > h1 {
    text-align: center;
    margin: 2rem 0;
    font-size: 2rem;
  }

  .button-row {
    margin: 4rem auto 0;
    text-align: center;
  }
`;

export default About;
