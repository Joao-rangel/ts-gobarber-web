import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn/index';

import AppProvider from './Hooks/index';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
