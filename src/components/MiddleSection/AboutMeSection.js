import styled from 'styled-components';
import { QUERIES } from '../../utils';

const AboutMe = () => {
  return (
    <Wrapper>
      <ImageSection>
        <picture>
          <source
            media={`${QUERIES.phoneAndSmaller}`}
            srcset="mobilesmall.png"
          />

          <source
            media={`${QUERIES.tabletAndSmaller}`}
            srcset="geeTablet.png"
          />
          <img src="geedesktop.png" alt="" />
        </picture>
      </ImageSection>
      <TextSection>
        <h2>About me</h2>
        <p>
          I’m a front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean,scalable and maintainable JavaScript. When
          writing JavaScript code, I mostly use React, but I can adapt to
          whatever tools are required. I’m happy working remotely and have
          experience in remote teams. When I’m not coding, you’ll find me
          watching documentaries or watching tech related videos. I love playing
          football and enjoy watching it too, Kindly checkout my projects below.
        </p>
        <Linkto>
          <a href="/">GO TO PROJECTS</a>
        </Linkto>
      </TextSection>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  padding-top: 100px;
  gap: 125px;
  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
    gap: 32px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
  }
`;
const ImageSection = styled.section`
  & img {
    object-fit: cover;
    line-height: 1;
    @media ${QUERIES.phoneAndSmaller} {
      width: 100%;
    }
  }
`;
const TextSection = styled.section`
  border-top: 1px solid #1a1a1a;
  border-bottom: 1px solid #1a1a1a;
  padding-top: 50px;
  padding-bottom: 48px;
  & h2 {
    color: var(--black);
    font-size: 40px;
    font-family: 'Martel', serif;
    margin-bottom: 28px;
    line-height: 30px;
  }
  & p {
    max-width: 350px;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #777777;
    margin-bottom: 24px;
    text-align: left;
  }
`;
export const Linkto = styled.div`
  width: 202px;
  height: 48px;
  padding: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 600ms;
  color: var(--black);
  &:hover {
    background: var(--black);
    transition: background 250ms;
    color: white;
  }
  border: 1px solid #1a1a1a;
  & a {
    font-size: 12px;
    color: inherit;
    /* color: var(--black); */
    letter-spacing: 2px;
    font-weight: bold;
    font-family: 'Martel', serif;
  }
`;

export default AboutMe;
