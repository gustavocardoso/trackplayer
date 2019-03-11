import { createGlobalStyle } from 'styled-components'

import { fonts, colors } from '../styles/config'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,900');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: normal normal 1rem/1.5 ${fonts.mainFont};
    color: ${colors.text.main};
    background: ${colors.bg.main};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
