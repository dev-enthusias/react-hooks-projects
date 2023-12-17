import { ChangeEvent } from 'react';
import { usersProfileData } from '../data/users';
import { useTheme } from '../context/ThemeContext';
import { useCurrentUser } from '../context/CurrentUserContext';

import ThemeColor from '../utils/ThemeColor';
import { MdOutlineDarkMode } from 'react-icons/md';

import { CiLight } from 'react-icons/ci';

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

      <div className='flex gap-5'>
        <div
          className={`border ${
            themeColor !== undefined &&
            `${themeColor['border']} rounded-full py-2 px-4 flex gap-2 text-xl`
          }`}
        >
          <button type='button' title='Light mode'>
            <CiLight />
          </button>
          <button type='button' title='Dark mode'>
            <MdOutlineDarkMode />
          </button>
          <button type='button' title='Custome theme'>
            <div className='w-4 h-4 rounded-full bg-[#C1DABD]'></div>
          </button>
        </div>

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
      </div>
    </nav>
  );
};

export default Navbar;
