import styled from 'styled-components';
import { QUERIES } from '../../utils';
import { Linkto } from './AboutMeSection';

const ContactMe = () => {
  return (
    <Wrapper>
      <Text>Interested in doing a project together?</Text>
      <Line />
      <Linkto>
        <a href="/">CONTACT ME</a>
      </Linkto>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
    justify-content: center;
  }
`;
const Text = styled.h2`
  color: var(--black);
  font-weight: 700;
  font-size: 40px;
  width: 450px;
  font-family: 'Martel', serif;
  @media ${QUERIES.tabletAndSmaller} {
    width: 350px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    text-align: center;
  }
`;
const Line = styled.hr`
  color: #1a1a1a;
  width: 534px;
  height: 1px;
  @media ${QUERIES.tabletAndSmaller} {
    width: 113px;
  }
`;

export default ContactMe;
