import React from 'react';
import {useTheme} from 'next-themes';
import {Switch} from '@nextui-org/react';

export const DarkModeSwitch = () => {
   const { theme, setTheme } = useTheme()
   const isDark = theme === 'dark';
   return (
      <Switch
         checked={isDark}
         onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
   );
};
