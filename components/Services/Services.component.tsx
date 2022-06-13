import { HTMLAttributes } from "react";
import styled from "styled-components";
import { ServiceInterface } from "types";
import { useIcon } from "hooks";
import { Link } from "components/Link";

interface ServicesProps extends HTMLAttributes<HTMLDivElement> {
  services: ServiceInterface[];
}
const Services: React.FC<ServicesProps> = ({ services, ...rest }) => {
  return (
    <StyledServices {...rest}>
      <h2>My Services</h2>
      <ul className="services__list">
        {services.map((service) => (
          <li
            key={Math.random().toString(36).substring(2, 7)}
            className="service__item"
          >
            <div className="service__item-content">
              <div className="service__item-icon" data-icon={service.icon}>
                {useIcon(service.icon)}
              </div>
              <div className="service__item-details">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="services__footer">
        <Link url="/services" title="Go to our services page" asButton={true}>
          View all
        </Link>
      </div>
    </StyledServices>
  );
};

const StyledServices = styled.div`
  background: transparent;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  > h2 {
    color: var(--purple);
    text-align: center;
  }

  .services__list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .service__item {
    padding: 12px;
    background-color: #fff;
    margin: 12px 8px;
    border-radius: 14px;
    box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.15);
    max-width: 400px;
    display: flex;

    .service__item-content {
      display: flex;
      align-items: center;
      margin: auto;

      .service__item-icon {
        width: calc(30% - 8px);
        margin-right: 8px;
        background-color: var(--blue);
        padding: 8px;
        border-radius: 14px;
        max-width: 75px;

        svg {
          color: #fff;
          width: 100%;
          height: auto;
        }
      }

      .service__item-details {
        width: calc(70% - 8px);
        margin-left: 8px;
        flex-grow: 1;
        color: var(--blue);

        h3 {
          margin: 0;
          margin-bottom: 4px;
          font-size: 1.2rem;
        }

        p {
          font-size: 0.85rem;
          margin: 0;
          margin-top: 4px;
        }
      }
    }
  }
  .services__footer {
    margin: 24px 0;
    text-align: center;
    > a {
      display: inline-block;
      background: transparent;
      color: var(--purple);
      border: 2px solid var(--purple);
      transition: 0.3s ease;
      background: linear-gradient(90deg, var(--purple) 50%, transparent 50%);
      background-size: 200%;
      background-position: -100%;

      &:hover {
        background-position: 0%;
        color: var(--off-white);
      }
    }
  }
`;

export { Services };
