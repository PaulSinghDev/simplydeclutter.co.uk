import type { NextPage } from "next";
import { Footer, Form, Meta, Nav, Section } from "components";
import { useRouter } from "next/router";
import { pages, siteInfo, navLinks } from "data";
import styled from "styled-components";
import React from "react";
import Image from "next/image";
const Contact: NextPage = () => {
  const { pathname } = useRouter();
  return (
    <div>
      <Meta
        title={pages.contact.title}
        description={pages.contact.description}
        url={`${siteInfo.url}${pathname}`}
        siteName={siteInfo.siteName}
        favicon={siteInfo.favicon}
      />
      <Nav links={navLinks} />
      <main>
        <StyledHeader>
          <div className="image">
            <Image
              src="/assets/images/photos/stock-photo-phone.jpeg"
              width={500}
              height={300}
              layout="responsive"
            />
          </div>
          <div className="content">
            <h1>Get in Touch</h1>
            <p>
              If you would like to get in contact for any reason at all please
              use the information below.
            </p>
            <p>
              I am always happy to hear from anyone and will be happy to arrange
              a zoom call for anything from explaining the process to organising
              a visit.
            </p>
            <strong>
              Phone: <a href="tel:07738129337"> 07738129337</a>
            </strong>
          </div>
        </StyledHeader>
        <Form submitHandler={(event) => console.log(event)} />
      </main>
      <Footer />
    </div>
  );
};

const StyledHeader = styled(Section)`
  margin-top: var(--nav-height);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > .image {
    border-radius: 24px;
    padding: 2rem;
    width: 95%;
    max-width: 500px;
    overflow: hidden;
    > span {
      border-radius: 24px;
    }
  }

  > .content {
    color: var(--blue);
    padding: 2rem;

    > strong {
      display: block;
      text-align: center;
      font-size: 1.25rem;
      color: var(--blue);
      > a {
        text-decoration: underline;
        text-underline-offset: 5px;
      }

      &:first-of-type {
        margin-top: 4rem;
      }
    }
  }
`;

export default Contact;
