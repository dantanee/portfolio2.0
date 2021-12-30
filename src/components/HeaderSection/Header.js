import styled from 'styled-components';
import { QUERIES } from '../../utils';
import UnstyledButton from '../UnStyledButton/UnstyledButton';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Wrapper>
      <Logo href="/">
        <img src="/logoColored.svg" alt="" />
      </Logo>
      <DesktopNav>
        <NavLink>About</NavLink>

        <Link to="/project">
          <NavLink>Projects</NavLink>
        </Link>

        <NavLink href="https://vigilant-goodall-15b305.netlify.app/">
          Resume
        </NavLink>

        <NavLink>Services</NavLink>
      </DesktopNav>
      <ContactMe>
        <ContactWrapper>
          <Link to="/contact">
            {' '}
            <ContactLink>Contact</ContactLink>
          </Link>
        </ContactWrapper>
      </ContactMe>
      <Hamburger>
        <UnstyledButton>
          <img src="/hamburger.png" alt="" />
        </UnstyledButton>
      </Hamburger>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: baseline;
  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    justify-content: space-between;
  }
`;
export const Logo = styled.a`
  font-family: 'Martel', serif;
  font-weight: 400;
  font-size: 30px;
  color: var(--black);
`;
const DesktopNav = styled.nav`
  display: flex;
  gap: 47px;
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;
export const NavLink = styled.a`
  font-family: 'Martel', sans-serif;
  color: var(--black);
  font-weight: 700;
  font-size: 16px;
  transition: background 600ms;
  &:hover {
    border-bottom: 3px solid var(--black);
    transition: background 250ms;
  }
`;
const NavWrapper = styled.div`
  padding: 8px 16px;
  transition: background 600ms;
  background: transparent;
  border-radius: 4px;
  &:hover {
    background: #e5e4e2;
    border-radius: 4px;
    transition: background 250ms;
  }
`;
const ContactMe = styled.div`
  display: grid;
  justify-items: end;
  color: white;
`;
const ContactLink = styled(NavLink)`
  &:hover {
    color: white;
    border-bottom: revert;
  }
`;
const ContactWrapper = styled.a`
  padding: 16px 32px;
  border: 1px solid gray;
  borderradius: 20px;
  transition: background 600ms;
  color: white;
  &:hover {
    /* background: #33323d; */
    background: var(--black);

    transition: background 250ms;
    & a {
      color: white;
    }
  }
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;
const Hamburger = styled.div`
  display: none;
  @media ${QUERIES.phoneAndSmaller} {
    display: revert;
  }
`;
export default Header;
