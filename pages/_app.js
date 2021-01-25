import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/css/globalStyles';
import db from '../db.json';

const MyGlobalStyle = GlobalStyle;

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
    <ThemeProvider theme={theme}>
      <MyGlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
