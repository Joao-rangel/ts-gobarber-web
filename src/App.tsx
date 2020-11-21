import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn/index';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './Hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastContainer />

    <GlobalStyle />
  </>
);

export default App;
