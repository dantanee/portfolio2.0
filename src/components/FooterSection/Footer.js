import styled from 'styled-components';
import { QUERIES } from '../../utils';
import { Logo } from '../HeaderSection/Header';
import { NavLink } from '../HeaderSection/Header';
const Footer = () => {
  return (
    <Wrapper>
      <NavSection>
        <Logo>
          <img src="/logo.svg" alt="" />
        </Logo>
        <FooterLink>Home</FooterLink>
        <FooterLink>Resume</FooterLink>
        <FooterLink>Projects</FooterLink>
        <FooterLink>Contact</FooterLink>
      </NavSection>
      <SocialSection>
        <img src="/Path.svg" alt="" />
        <img src="/Shape.svg" alt="" />
        <img src="/twit.svg" alt="" />
      </SocialSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #1a1a1a;
  padding: 24px 124px;
  display: flex;
  @media ${QUERIES.tabletAndSmaller} {
    padding: 24px 39px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
    align-items: center;
  }
`;
const FooterLink = styled(NavLink)`
  color: var(--primary-color);
`;
// const FooterLogo = styled(Logo)`
//   color: var(--primary-color);
// `;
const NavSection = styled.nav`
  display: flex;
  align-items: center;
  gap: 43px;
  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
    gap: 32px;
  }
`;
const SocialSection = styled.section`
  display: flex;
  margin-left: auto;
  gap: 16px;
  align-items: center;
  @media ${QUERIES.phoneAndSmaller} {
    align-items: revert;
    margin-left: revert;
    margin-top: 42px;
  }
`;

export default Footer;
