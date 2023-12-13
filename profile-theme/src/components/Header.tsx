import Navbar from './Navbar';
import Hero from './Hero';
import { useTheme } from '../context/ThemeContext';
import ThemeColor from '../utils/ThemeColor';

const Header = () => {
  const theme = useTheme();
  const themeColor = ThemeColor(theme);

  return (
    <header
      className={`h-screen overflow-hidden flex flex-col justify-between ${
        themeColor !== undefined && themeColor['bg-body']
      }`}
    >
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
