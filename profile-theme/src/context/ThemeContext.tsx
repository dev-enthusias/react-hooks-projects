import { ReactNode, createContext, useContext } from 'react';
import { useCurrentUser } from './CurrentUserContext';
import { usersProfileData } from '../data/users';

const ThemeContext = createContext<string>('dark');

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { currentUser } = useCurrentUser();

  return (
    <ThemeContext.Provider value={usersProfileData[currentUser].theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  return useContext(ThemeContext);
}
