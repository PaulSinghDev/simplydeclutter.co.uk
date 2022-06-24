import { Link } from "components";
import { HTMLAttributes } from "react";

import styled from "styled-components";

interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <StyledFooter {...props}>
      <div className="footer-column">
        <Link url="/" title="Go back to the home page" className="footer-logo">
          <img src="/assets/images/logos/full-logo-white.png" />
        </Link>
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
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  background-color: var(--purple);
  padding: 24px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
    width: 33%;
    flex-grow: 1;
    min-width: 250px;
    padding: 24px;

    > a.footer-logo {
      display: block;
      text-align: center;

      &:hover {
        background-color: transparent;
      }

      > img {
        max-width: 100%;
      }
    }

    h4 {
      font-size: 1.3rem;
      margin-bottom: 0.34rem;
      margin-top: 0;
    }

    a {
      padding: 2px 0;
      display: inline-block;
    }
  }
`;

export { Footer };
