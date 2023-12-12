import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';

import Bottom from './src/routes';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Bottom />
      </PersistGate>
    </Provider>
  );
};

export default App;
