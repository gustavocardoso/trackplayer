import { createGlobalStyle } from 'styled-components'
import config from './variables'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,900');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: normal normal 1rem/1.5 'Source Sans Pro', sans-serif;
    color: ${config.colors.text.main};
    background: ${config.colors.bg.main};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
