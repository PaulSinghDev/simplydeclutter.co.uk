import { Link } from "components";
import { Button } from "components/Button";
import {
  HTMLAttributes,
  MouseEventHandler,
  useEffect,
  useState,
  useRef,
} from "react";
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
  const nav = useRef<any>();

  useEffect(() => {
    if (width > 600) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    document.documentElement.style.setProperty(
      "--nav-height",
      `${nav.current.offsetHeight}px`
    );
  }, [width]);

  const handleToggle: MouseEventHandler<
    HTMLButtonElement | HTMLDivElement
  > = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledNav ref={nav} {...rest}>
      <div className="nav-buttons">
        <Button
          className="burger-menu"
          aria-label="Toggle the navigation menu"
          onClick={handleToggle}
          buttonStyle="transparent"
          id="main-nav-toggle"
          aria-controls="main-nav-links"
        >
          <IoMdMenu size={30} />
        </Button>
      </div>
      <div
        className="nav-links"
        aria-expanded={isOpen}
        onClick={isOpen ? handleToggle : undefined}
        aria-label="Main navigation links"
        id="main-nav-links"
      >
        <ul>
          {links.map((link: NavLinkInterface, i: number) => {
            return (
              <li key={`${Date.now()}-${i}-${link.label}`}>
                <Link url={link.url} title={link.title}>
                  <span>{link.label}</span>
                </Link>
                {!!link.subLinks && link.subLinks.length > 0 ? (
                  <ul className="nav-sub-links">
                    {link.subLinks.map((subLink, i) => (
                      <li
                        key={`${Date.now()}-${i}-${subLink.label}`}
                        className="nav-sub-link"
                      >
                        <Link url={subLink.url} title={subLink.title}>
                          {subLink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--off-white-pink);
  padding: 12px;
  z-index: 1;
  .nav-links {
    width: 100%;
    height: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);

    &[aria-expanded="false"] {
      max-height: 0;
      opacity: 0;
      visibility: hidden;
      z-index: -1;
      transition: opacity 0.3s ease 0s, max-height 0s 0.3s, visibility 0s 0.3s,
        z-index 0s 0.3s;
      ul {
        transform: translateY(100%);
      }
    }

    &[aria-expanded="true"] {
      max-height: 100%;
      opacity: 1;
      visibility: visible;
      z-index: 10;
      transition: opacity 0.3s ease 0.1s, max-height 0s 0s, visibility 0s 0s,
        z-index 0s 0s;
      ul {
        transform: translateY(0);
      }
    }

    ul {
      margin: 0;
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      border-radius: 24px 24px 0 0;
      padding: 24px;
      bottom: 0;
      position: absolute;
      width: 95%;
      left: 2.5%;
      transition: 0.3s ease;

      li {
        margin: 8px 0;
        a {
          padding: 12px 16px;
          font-weight: bold;
          color: var(--purple);

          &:hover {
            color: var(--off-white);
            text-decoration: none;
          }
        }
      }
    }
  }

  .nav-buttons {
    margin-left: auto;

    button {
      padding: 4px;
      border-radius: 8px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      > svg {
        color: var(--blue);
        transition: 0.3s ease;
      }
      &:hover {
        > svg {
          color: var(--off-white-pink);
        }
      }
    }
  }

  @media screen and (min-width: 600px) {
    top: 0;

    .nav-links {
      width: auto;
      height: auto;
      bottom: unset;
      width: 100%;
      background: transparent;
      top: 0;

      ul {
        flex-direction: row;
        position: static;
        width: 100%;
        background: var(--off-white-pink);
        justify-content: flex-end;
      }
    }
    .nav-buttons {
      display: none;
    }
  }
`;

export { Nav };
