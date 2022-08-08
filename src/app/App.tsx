import React from 'react';
import { GlobalStyles } from './GlobalStyled';
import { Rotas } from './routes';

export const App = () => {
  return (
    <Rotas>
      <GlobalStyles />
    </Rotas>
  );
}

export default App;
