interface ThemeColorsProps {
  text: string;
  border: string;
  'bg-body': string;
  'text-60': string;
  'text-87': string;
  'bg-select': string;
  'bg-nav'?: string;
  'focus-ring'?: string;
  'focus-outline'?: string;
  'shadow-lg'?: string;
  'shadow-color'?: string;
}

export default function ThemeColor(theme: string): ThemeColorsProps {
  if (theme === 'light') {
    return {
      'bg-body': 'bg-white',
      text: 'text-[#121212]',
      border: 'border-[#12121299]',
      'text-60': 'text-[#12121299]',
      'text-87': 'text-[#121212DE]',
      'shadow-lg': 'shadow-lg',
      'shadow-color': 'shadow-[#1212121A]',
      'bg-select': 'bg-[#1212121A]',
    } as ThemeColorsProps;
  } else if (theme === 'green') {
    return {
      'bg-body': 'bg-[#C1DABD]',
      text: 'text-[#3C5F3F]',
      border: 'border-[#5C7F5F]',
      'text-60': 'text-[#12121299]',
      'text-87': 'text-[#121212DE]',
      'shadow-lg': 'shadow-lg',
      'shadow-color': 'shadow-[#3C5F3F33]',
      'bg-select': 'bg-[#cfe2cb]',
      'focus-ring': 'focus:ring-[#3a5c3d]',
      'focus-outline': 'focus:outline-[#3a5c3d]',
    } as ThemeColorsProps;
  }

  return {
    'bg-body': 'bg-[#121212]',
    text: 'text-white',
    border: 'border-[#FFFFFF99]',
    'text-60': 'text-[#FFFFFF99]',
    'text-87': 'text-[#FFFFFFDE]',
    'bg-nav': 'bg-[#242424]',
    'bg-select': 'bg-[#484848]',
    'focus-ring': 'focus:ring-white',
    'focus-outline': 'focus:outline-white',
  } as ThemeColorsProps;
}
