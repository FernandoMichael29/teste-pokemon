import { GlobalStyle } from './css';
import { Rotas } from './routes';
import { Theme } from './themes';

export const App = () => {
  return (
  <>
    <Theme>
      <GlobalStyle />
      <Rotas />
    </Theme>
  </>
  );
};
