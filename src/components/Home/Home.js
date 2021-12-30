import styled from 'styled-components';
import { QUERIES } from '../../utils';
import Footer from '../FooterSection/Footer';
import Header from '../HeaderSection/Header';
import Hero from '../HeroSection/Hero';
import AboutMe from '../MiddleSection/AboutMeSection';
import ContactMe from '../MiddleSection/ContactMeSection';
import Spacer from '../Spacer/Spacer';

function Home() {
  return (
    <Wrapper>
      <Hero />
      <MiddleSection>
        <AboutMe />
        <Spacer size={150} />
        <ContactMe />
      </MiddleSection>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MiddleSection = styled.div`
  background-color: #f3f4f3;
  padding-left: 124px;
  padding-right: 124px;
  padding-bottom: 150px;
  @media ${QUERIES.tabletAndSmaller} {
    padding-left: 39px;
    padding-right: 39px;
  }
`;

export default Home;
