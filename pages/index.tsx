import type { NextPage } from "next";
import { Footer, Header, Meta, Nav, Section, Services, Link } from "components";
import { useRouter } from "next/router";
import { pages, siteInfo, navLinks, testimonials, services } from "data";
import { Testimonials } from "components/Testimonials";
import Image from "next/image";

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
        <div className="hero-image">
          <Image
            src="/assets/images/logos/full-logo-blue-500.svg"
            width={500}
            height={200}
            alt="Simply Declutter logo"
          />
        </div>
        <h1>
          Regain control <br /> of your living space
        </h1>
        <Link url="/prices-services" title="View my services" asButton={true}>
          Read More
        </Link>
      </Header>
      <main>
        <Section className="image-with-text">
          <div className="image">
            <picture>
              <Image
                src="/assets/images/examples/bathroom-flower-basket.jpg"
                width={400}
                height={315}
                layout="responsive"
                alt="Flower basket in a bathroom"
              />
            </picture>
          </div>
          <div className="text">
            <h2>Professionally Declutter and Organise Your Home with Hilary</h2>
            <p>
              If you feel overwhelmed or find it hard to relax. If you are
              stressed out by your disorganised home, or are struggling to let
              go of things you no longer need, I can help you to regain control
              and create a calm, more organised home.
            </p>
            <Link url="/about" title="Read about me" asButton={true}>
              Read About Me
            </Link>
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
