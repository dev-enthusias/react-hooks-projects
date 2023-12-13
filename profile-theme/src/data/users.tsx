import Roman from '../assets/roman-white.png';
import Sam from '../assets/sam-green.png';
import Samanta from '../assets/samantha.png';
import Sarah from '../assets/pearl.png';

interface usersProfileDataType {
  name: string;
  job: string;
  description: string;
  image: string;
  theme: string;
}

export const usersProfileData: usersProfileDataType[] = [
  {
    name: 'Andrew Roman',
    job: 'Makeup Artist',
    description:
      "Bringing artistry to life through makeup is not just my profession; it's my passion. I believe in its transformative power, going beyond skin deep. It's about empowering, boosting confidence, and celebrating unique beauty. Each face is my canvas, using makeup to reveal hidden elegance and confidence.",
    theme: 'dark',
    image: Roman,
  },
  {
    name: 'Sam Jones',
    job: 'Backend Developer',
    description:
      'Driven by a passion for crafting robust systems and optimizing functionality, I specialize in backend development with a focus on creating efficient, scalable, and secure solutions.',
    theme: 'green',
    image: Sam,
  },
  {
    name: 'Samanta Chidera',
    job: 'Fashionista',
    description:
      "My dedication to fashion extends beyond trends; it's about empowering individuals to embrace their uniqueness through style. I bring a blend of creativity, authenticity, and a deep understanding of fashion's cultural impact to every project, inspiring others to explore their own sartorial expressions.",
    theme: 'light',
    image: Samanta,
  },
  {
    name: 'Morgan Pearl',
    job: 'Hair Dresser',
    description:
      "Welcome to my salon, where I turn hair into art! With passion and skill, I craft personalized styles that celebrate your uniqueness. Let's create your perfect look and boost your confidence, one fabulous style at a time!",
    theme: 'green',
    image: Sarah,
  },
];
