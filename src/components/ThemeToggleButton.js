import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import {
  GlobalStyle,
  TogglerLabel,
  TogglerInput,
  TogglerSlider,
  TogglerSunImage,
  TogglerMoonImage
} from '../theme'
import SunImage from '../images/sun.svg'
import MoonImage from '../images/moon.svg'

const ThemeToggleButton = () => {
  return (
  <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <>
          <GlobalStyle theme={theme} />
          <TogglerLabel className={theme}>
            <TogglerInput
              type='checkbox'
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />
            <TogglerSunImage src={SunImage} className={theme} alt="Light" />
            <TogglerMoonImage src={MoonImage} className={theme} alt="Dark" />
            <TogglerSlider className={theme}/>
          </TogglerLabel>
        </>
      )}
  </ThemeToggler>
  )
}

export default ThemeToggleButton;
