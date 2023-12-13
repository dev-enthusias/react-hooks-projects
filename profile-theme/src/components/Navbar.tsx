import { ChangeEvent } from 'react';
import { useTheme } from '../context/ThemeContext';
import { usersProfileData } from '../data/users';
import { useCurrentUser } from '../context/CurrentUserContext';
import ThemeColor from '../utils/ThemeColor';

const Navbar = () => {
  const theme = useTheme();
  const themeColor = ThemeColor(theme);
  const { currentUser, setCurrentUser } = useCurrentUser();

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    const selectedUserProfile = e.target.selectedIndex;
    setCurrentUser(selectedUserProfile);
  }

  return (
    <nav
      className={`flex justify-between items-center py-4 px-5 ${
        theme === 'green' || theme === 'light'
          ? `shadow-lg ${themeColor['shadow-color']}`
          : themeColor['bg-nav']
      }  ${themeColor !== undefined && `${themeColor['text']}`}`}
    >
      <div className='text-lg tracking-widest font-bold'>PROFILER</div>

      <div className='flex items-center gap-2'>
        <label htmlFor='choose-user-profile' className='text-sm font-medium'>
          Choose a user profile:
        </label>
        <select
          id='choose-user-profile'
          className={`p-2 text-sm border rounded-lg bg-[#1212121a] focus:ring-[#121212] fous:outline focus:outline-[#121212] ${
            themeColor !== undefined &&
            `${themeColor['border']} ${themeColor['bg-select']} ${themeColor['focus-ring']}`
          }`}
          onChange={handleChange}
          value={currentUser}
        >
          {usersProfileData.map((user, i) => {
            return (
              <option value={i} key={i}>
                {user.name.split(' ')[0]}
              </option>
            );
          })}
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
