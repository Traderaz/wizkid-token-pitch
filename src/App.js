import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import PitchDeck from './components/PitchDeck';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AppContainer>
          <PitchDeck />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
`;

export default App; 