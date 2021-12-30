import styled from 'styled-components';
import { Linkto } from '../MiddleSection/AboutMeSection';
const Projects = () => {
  return (
    <Wrapper>
      <SectionWrapper>
        <ImageWrapper>
          <img src="/eazybank.png" alt="" />
        </ImageWrapper>
        <TextSectionWrapper>
          <Heading>Easy Bank</Heading>
          <Text>
            This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the
            testimonial slider.
          </Text>
          <Linkto>
            <a href="/">VIEW PROJECT</a>
          </Linkto>
        </TextSectionWrapper>
      </SectionWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 20px 165px;
`;
const SectionWrapper = styled.section`
  display: flex;
  gap: 125px;
`;
const ImageWrapper = styled.div`
  width: 540px;
  height: 500px;
  background-color: #f2f2f2;
  padding: 50px 54px 0;

  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    object-position: left bottom;
  }
`;
const TextSectionWrapper = styled.div`
  padding-top: 103px;
  border-top: 1px solid #c0c0c0;
  border-bottom: 1px solid #c0c0c0;
`;
const Heading = styled.h2`
  font-family: 'Martel', serif;
  color: #33323d;
  font-size: 40px;
  font-weight: 700;
`;
const Text = styled.p`
  margin-top: 28px;
  font-weight: 400;
  font-size: 1rem;
  max-width: 350px;
  padding-right: 4px;
  color: #33323d;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 24px;
`;
export default Projects;
