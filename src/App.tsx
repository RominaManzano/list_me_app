import React from 'react';
import { Provider } from 'react-redux';

import Routes from './Routes';
import NavBar from './components/NavBar';
import { store } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <Routes />
    </Provider>
  );
};

export default App;
