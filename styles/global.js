import css from 'styled-jsx/css'
import theme from '../styles/theme'

export default css.global`
  body {
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    font-family: ${theme.fontFamily.sansSerif};
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.8;
  }
  h1 {
    font-weight: 700;
  }
  p {
    margin-bottom: 10px;
  }
`