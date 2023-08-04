import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './css';
import { Rotas } from './routes';
import { Theme } from './themes';
import { Helmet } from "react-helmet";
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
  <>
    <Theme>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Ubuntu:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <ToastContainer position="top-right" closeOnClick pauseOnHover />
      <Rotas />
    </Theme>
  </>
  );
};
