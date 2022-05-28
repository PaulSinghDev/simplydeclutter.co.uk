import { Link } from "components";
import { HTMLAttributes } from "react";
import styled from "styled-components";

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
  return (
    <StyledNav {...rest}>
      {links.map((link: NavLinkInterface, i: number) => {
        return (
          <Link
            key={`${Date.now()}-${i}-${link.label}`}
            url={link.url}
            title={link.title}
          >
            <>
              <span>{link.label}</span>
              {!!link.subLinks && link.subLinks.length > 0 ? (
                <ul>
                  {link.subLinks.map((subLink, i) => (
                    <Link
                      key={`${Date.now()}-${i}-${subLink.label}`}
                      url={subLink.url}
                      title={subLink.title}
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </ul>
              ) : null}
            </>
          </Link>
        );
      })}
    </StyledNav>
  );
};

const StyledNav = styled.nav``;

export { Nav };
