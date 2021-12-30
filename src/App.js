import styled from 'styled-components';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/HeaderSection/Header';
import Spacer from './components/Spacer/Spacer';
import Contact from './components/ContactPage/Contact';
import { QUERIES } from './utils';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <BrowserRouter>
      <TopSection>
        <Header />
        {/* <Spacer size={70} /> */}
      </TopSection>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

const TopSection = styled.div`
  padding: 38px 124px;
  @media ${QUERIES.tabletAndSmaller} {
    padding:47px 39px ;
  }

  }
`;
export default App;
