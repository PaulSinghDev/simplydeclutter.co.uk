import { Link } from "components";
import { HTMLAttributes } from "react";

import styled from "styled-components";

interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <StyledFooter {...props}>
      <div className="footer-column">
        <picture>
          <img src="/assets/images/logos/full-logo-white.png" />
        </picture>
      </div>
      <div className="footer-column">
        <h4>Useful Links</h4>
        <ul>
          <li>
            <Link url="/about" title="Go to about page">
              About
            </Link>
          </li>
          <li>
            <Link url="/contact" title="Go to contact page">
              Contact
            </Link>
          </li>
          <li>
            <Link url="/services" title="Go to services page">
              Services
            </Link>
          </li>
          <li>
            <Link url="/prices" title="Go to prices page">
              Prices
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Legal Information</h4>
        <ul>
          <li>
            <Link url="/privacy-policy" title="Go to privacy policy">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link url="/terms-of-use" title="Go to terms of use">
              Terms of Use
            </Link>
          </li>
          <li>
            <Link url="/terms-of-service" title="Go to terms of service">
              Terms of Service
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-column"></div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  background-color: var(--purple);
  padding: 24px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  color: var(--off-white-pink);

  ul {
    margin: 0;
    list-style: none;
    padding: 0;

    li {
      display: block;
    }
  }

  .footer-column {
    width: 25%;
    flex-grow: 1;
    min-width: 250px;

    picture {
      display: block;
      text-align: center;
    }

    h4 {
      font-size: 1.3rem;
      margin-bottom: 0.34rem;
    }

    a {
      padding: 2px 0;
      display: inline-block;
    }
  }
`;

export { Footer };
