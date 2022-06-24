import type { NextPage } from "next";
import { Card, Footer, Meta, Nav, Section, Services, Slider } from "components";
import { useRouter } from "next/router";
import { pages, siteInfo, navLinks } from "data";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import { services } from "data";

const Prices: NextPage = () => {
  const { pathname } = useRouter();
  const wrapper = useRef<any>();
  const slides = useRef<any>([]);
  useEffect(() => {
    // Set the height on the wrapper
    if (slides.current?.length > 0 && !!wrapper?.current) {
      const height = slides.current.reduce((output: number, slide: any) => {
        if (slide.clientHeight > output) {
          output = slide.clientHeight;
        }
        return output;
      }, 0);
      wrapper.current.style.height = `${height}px`;
    }
  });

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
      <main>
        <StyledProcessSection>
          <StyledIntroSection>
            <StyledImageSection>
              <img src="/assets/images/photos/stock-photo-house.jpeg" />
            </StyledImageSection>
            <h1>Declutter Your Home in Three Simple Steps</h1>
            <p>
              If you feel overwhelmed or find it hard to relax, if you are
              stressed out by your disorganised home or are struggling to let go
              of things you no longer need I can help you to regain control and
              create a calm, more organised home.
            </p>
            <p>
              I offer a range of professional organisational services which all
              start with a simple phone call to see what your requirements are.
            </p>
            <p>
              The below is a breakdown of the process which we will undertake
              together and how we can work to declutter your home and regain
              control of your living space.
            </p>
          </StyledIntroSection>
          <StyledCardSection>
            <div className="process-wrapper">
              <Slider
                slides={[
                  () => (
                    <Card
                      className="process-card"
                      title="Step 1: First Contact"
                      content={[
                        "In order to get an idea of the services you require and agree upon a plan of action the first step is to arrange a brief call.",
                        "During our call we will discuss your goals and work to dispel any worries you may have.",
                      ]}
                      background="var(--off-white)"
                      text={{ color: "var(--blue)" }}
                      shadow={true}
                      image="/assets/images/photos/stock-photo-video-call.jpeg"
                    />
                  ),
                  () => (
                    <Card
                      className="process-card"
                      title="Step 2: House Visit"
                      content={[
                        "I will arrive at your property at the time and date we agree in our initial call and then begin assessing the plan of action.",
                        "After a brief scout of the area you wish to regain control of we will agree an order in which to work and then I will start to organise the space.",
                      ]}
                      background="var(--off-white)"
                      text={{ color: "var(--blue)" }}
                      shadow={true}
                      image="/assets/images/photos/stock-photo-house.jpeg"
                    ></Card>
                  ),
                  () => (
                    <Card
                      className="process-card"
                      title="Step 3: Relax"
                      content={[
                        "Once I have finished organising your space we will assess the outcome together before I leave you to enjoy the peace and serenity of a decluttered living space.",
                      ]}
                      background="var(--off-white)"
                      text={{ color: "var(--blue)" }}
                      shadow={true}
                      image="/assets/images/photos/stock-photo-decluttered-house.jpeg"
                    ></Card>
                  ),
                ]}
              />
            </div>
          </StyledCardSection>
        </StyledProcessSection>

        <Section>
          <Services services={services} id="services" showButton={false} />
        </Section>
        <StyledPricesSection id="prices">
          <h2>My Prices</h2>
          <p>
            In order to keep my pricing as fair as possible I charge a flat fee
            of just <strong>£35 per hour</strong> for all my clients and do not
            add on any hidden fees.
          </p>
          <p>
            If you live more than 10 miles or 15 minutes by car I will need to
            charge an <strong>additional £30 per hour</strong> of travel time.
            This will be charged in 15 minute increments.
          </p>
          <strong>A full breakdown is below:</strong>
          <div className="price-list">
            <ul>
              <li>Consultation Fee: £0</li>
              <li>Hourly Rate: £35</li>
              <li>
                Travel fee £30 per hour
                <div className="disclaimer">
                  Travel fee only applies to people more than 15 minutes by car
                  or 10 miles away
                </div>
              </li>
              <li>Minimum Callout: 3 hours</li>
              <li>
                Payment must be paid at the end of each session in cash, by card
                or by bank transfer.
              </li>
            </ul>
          </div>
        </StyledPricesSection>
      </main>
      <Footer />
    </div>
  );
};
const StyledProcessSection = styled(Section)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: calc(var(--nav-height) + 24px);
`;

const StyledImageSection = styled.div`
  border-radius: 24px 24px 0 0;
  overflow: hidden;
  position: relative;
  max-height: 200px;
  max-width: 700px;
  flex-basis: 100%;
  margin: auto;

  &::before {
    width: 100%;
    height: 150px;
    content: "";
    background-image: linear-gradient(
      transparent 55%,
      var(--off-white-pink) 90%
    );
    position: absolute;
    bottom: 0;
    left: 0;
  }

  img {
    max-width: 100%;
    object-fit: cover;
    object-position: 50% -48px;
  }
`;

const StyledIntroSection = styled.div`
  color: var(--blue);
  width: 30%;
  flex-grow: 1;
  flex-basis: 400px;
  max-width: 400px;

  > picture {
    display: block;
    max-width: 60%;
    margin: auto;

    > img {
      border-radius: 24px;
      max-width: 100%;
      height: auto;
    }
  }

  > h1 {
    text-align: center;
    margin: 0 0 2rem 0;
    font-size: 2rem;
  }
`;

const StyledCardSection = styled.div`
  padding: 0 auto 72px auto;
  flex-grow: 1;
  flex-basis: 320px;

  .process-wrapper {
    display: flex;
    overflow: hidden;
    flex-direction: column;
    justify-content: center;

    .process-cards {
      position: relative;
      .process-card {
        max-width: 400px;
        width: 100%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .process-nav {
      margin: 72px 0 0;
      align-self: Center;
    }
  }
`;

const StyledPricesSection = styled(Section)`
  color: var(--purple);

  .price-list {
    li {
      margin: 8px 0;
    }

    .disclaimer {
      > sup {
        margin-right: 8px;
      }
      font-size: 0.75rem;
    }
  }
`;

export default Prices;
