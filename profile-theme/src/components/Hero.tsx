import { usersProfileData } from '../data/users';
import { useCurrentUser } from '../context/CurrentUserContext';
import { useTheme } from '../context/ThemeContext';
import ThemeColor from '../utils/ThemeColor';

const Hero = () => {
  const { currentUser } = useCurrentUser();
  const theme = useTheme();
  const themeColor = ThemeColor(theme);

  return (
    <section className='flex items-end text-lg pl-5 overflow-hidden -mr-20'>
      <div className='w-[55%] mb-10'>
        <span
          className={`inline-block text-2xl font-semibold leading-3 mb-4 ${
            themeColor !== undefined && themeColor['text-60']
          }`}
        >
          {usersProfileData[currentUser].name},
        </span>
        <h1
          className={`text-[5.5rem] font-bold leading-[5.5rem] mb-8 ${
            themeColor !== undefined && themeColor.text
          }`}
        >
          {usersProfileData[currentUser].job}
        </h1>
        <p
          className={`border p-4 rounded-xl ${
            themeColor !== undefined && themeColor['text-60']
          } ${themeColor !== undefined && themeColor['border']}`}
        >
          {usersProfileData[currentUser].description}
        </p>
      </div>
      <div className='w-3/5 h-full overflow-hidden'>
        <img
          src={usersProfileData[currentUser].image}
          alt={usersProfileData[currentUser].name + ' image'}
          className='object-cover w-full h-full object-center'
        />
      </div>
    </section>
  );
};

export default Hero;
