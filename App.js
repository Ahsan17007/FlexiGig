import React from 'react';
import {
  LogBox
} from 'react-native';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from './src/Redux/Store/Index'

import MainStack from './src/Stacks/MainStack';

LogBox.ignoreAllLogs()
const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainStack />
      </PersistGate>
    </Provider>

  );
};

export default App;