import { CurrentUserProvider } from './context/CurrentUserContext';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';

function App() {
  return (
    <CurrentUserProvider>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </CurrentUserProvider>
  );
}

export default App;
