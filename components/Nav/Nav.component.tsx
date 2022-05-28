import { Link } from "components";
import { Button } from "components/Button";
import { HTMLAttributes, MouseEventHandler, useEffect, useState } from "react";
import styled from "styled-components";
import { useDeviceSize } from "hooks";
import { IoMdMenu } from "react-icons/io";

export interface NavLinkInterface {
  label: string;
  title: string;
  url: string;
  subLinks?: NavLinkInterface[];
  isExternal: boolean;
}

interface NavProps extends HTMLAttributes<HTMLDivElement> {
  links: NavLinkInterface[];
}

const Nav: React.FC<NavProps> = ({ links, ...rest }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { width } = useDeviceSize();

  useEffect(() => {
    if (window.innerWidth > 600) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [width]);

  const handleToggle: MouseEventHandler<HTMLButtonElement> = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledNav {...rest}>
      <div className="nav-buttons">
        <Button
          className="burger-menu"
          aria-label="Toggle the navigation menu"
          onClick={handleToggle}
        >
          <IoMdMenu size={30} />
        </Button>
      </div>
      <div className="nav-links" aria-expanded={isOpen}>
        <ul>
          {links.map((link: NavLinkInterface, i: number) => {
            return (
              <li key={`${Date.now()}-${i}-${link.label}`}>
                <Link url={link.url} title={link.title}>
                  <>
                    <span>{link.label}</span>
                    {!!link.subLinks && link.subLinks.length > 0 ? (
                      <ul>
                        {link.subLinks.map((subLink, i) => (
                          <li key={`${Date.now()}-${i}-${subLink.label}`}>
                            <Link url={subLink.url} title={subLink.title}>
                              {subLink.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  flex-wrap: wrap;

  .nav-links {
    width: 100%;

    &[aria-expanded="false"] {
      display: none;
    }

    ul {
      margin: 0;
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: column;

      li {
        margin: 8px;
        a {
          padding: 12px 16px;
        }
      }
    }
  }

  .nav-buttons {
    margin-left: auto;
  }

  @media screen and (min-width: 600px) {
    .nav-links {
      width: auto;
      ul {
        flex-direction: row;
      }
    }
    .nav-buttons {
      display: none;
    }
  }
`;

export { Nav };
