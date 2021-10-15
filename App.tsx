import React from 'react';
import MainScreen from './src/screens/MainScreen';
import mainReducer from './src/store/reducer/main';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = createStore(mainReducer);

const App = () => {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
};

export default App;
