import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/globals';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <ThemeProvider theme={{}}>
      <>
        <GlobalStyles />
        {getLayout(<Component {...pageProps} />)}
      </>
    </ThemeProvider>
  );
};

export default App;
