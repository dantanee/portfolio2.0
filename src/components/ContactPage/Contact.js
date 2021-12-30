import styled from 'styled-components';
import Header from '../HeaderSection/Header';
import UnstyledButton from '../UnStyledButton/UnstyledButton';
import Spacer from '../Spacer/Spacer';
import { QUERIES } from '../../utils';

const Contact = () => {
  return (
    <Wrapper>
      <MainSection>
        <GetInTouch>
          <Heading>Get in Touch</Heading>

          <TextAndSocialsWrapper>
            <p>
              I’d love to hear about what you’re working on and how I could
              help. I’m currently looking for a new role and am open to a wide
              range of opportunities. My preference would be to find a position
              in a company in London. But I’m also happy to hear about
              opportunites that don’t fit that description. I’m a hard-working
              and positive person who will always approach each task with a
              sense of purpose and attention to detail. Please do feel free to
              check out my online profiles below and get in touch using the
              form.
            </p>
            <SocialsWrapper>
              <a href="/">
                <UnstyledButton>
                  <img src="/PathColored.svg" alt="" />
                </UnstyledButton>
              </a>
              <a href="/">
                <UnstyledButton>
                  <img src="/ShapeColored.svg" alt="" />
                </UnstyledButton>
              </a>
              <a href="/">
                <UnstyledButton>
                  <img src="/twitColored.svg" alt="" />
                </UnstyledButton>
              </a>
            </SocialsWrapper>
          </TextAndSocialsWrapper>
        </GetInTouch>
      </MainSection>
      <MainSection>
        <GetInTouch>
          <Heading>Contact Me</Heading>
          <Form>
            <InputWrapper>
              <Label>
                Name
                <Input placeholder="Jane Doe" />
              </Label>
              <Label>
                Email Address
                <Input placeholder="email@example.com" />
              </Label>
              <Label>
                Message
                <TextArea placeholder="How may I help you?" />
              </Label>
            </InputWrapper>
            <ButtonWrapper>SEND MESSAGE</ButtonWrapper>
          </Form>
        </GetInTouch>
      </MainSection>
      <Spacer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-left: 124px;
  padding-right: 124px;
  @media ${QUERIES.tabletAndSmaller} {
    padding-left: 39px;
    padding-right: 39px;
  }
`;
const MainSection = styled.div`
  padding-top: 48px;
  padding-bottom: 48px;
  border-top: 1px solid #777777;

  @media ${QUERIES.phoneAndSmaller} {
    padding-top: 28px;
    padding-bottom: 28px;
  }
`;
const GetInTouch = styled.section`
  display: flex;
  gap: 145px;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
    gap: 24px;
  }
`;

const Heading = styled.h2`
  font-weight: 700;
  font-size: ${40 / 16}rem;
  font-family: 'Martel', serif;
  width: max-content;
  color: #33323d;
`;
const TextAndSocialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  & p {
    max-width: 635px;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #777777;
  }
`;
const SocialsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
const Form = styled.form`
  width: 635px;
  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
  }
`;
const Input = styled.input`
  display: block;
  margin-top: 8px;
  width: 100%;
  padding: 9px 16px;
  background-color: #fafafa;
  border: 1px solid #33323d;
  &::placeholder {
    font-family: 'Poppins', serif;
  }
`;
const Label = styled.label`
  font-weight: 700;
  font-size: 13px;
  color: #33323d;
  font-family: 'Martel', serif;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const TextArea = styled.textarea`
  display: block;
  width: 100%;
  margin-top: 8px;
  padding: 9px 16px;
  height: 96px;
  border: 1px solid #33323d;

  &::placeholder {
    font-family: 'Poppins', serif;
  }
`;
const ButtonWrapper = styled(UnstyledButton)`
  padding: 14px 24px;
  background-color: #203a4c;
  color: white;
  font-weight: 400;
  font-size: 12px;
  display: flex;
  align-items: center;
  margin-top: 24px;
`;
export default Contact;
