import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';

interface CurrentUserContextValueProps {
  currentUser: number;
  setCurrentUser: Dispatch<SetStateAction<number>>;
}

const CurrentUserContext = createContext<CurrentUserContextValueProps>({
  currentUser: 0,
  setCurrentUser: () => {},
});

export const CurrentUserProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<number>(0);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export function useCurrentUser() {
  return useContext(CurrentUserContext);
}

