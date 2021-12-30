import styled from 'styled-components';
import { QUERIES } from '../../utils';

const Hero = () => {
  return (
    <Wrapper>
      <HeroText>
        <span>Hi,I'm Yasir</span>
        <span>I build web </span>
        <span> and blockchain apps</span>
      </HeroText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* display: grid;
  place-content: center; */
  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;
const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & span {
    font-weight: 500;
    font-size: 90px;
    font-family: 'Scope one', serif;
    text-align: center;
    display: block;
    @media ${QUERIES.phoneAndSmaller} {
      display: revert;
    }
  }
`;

export default Hero;
