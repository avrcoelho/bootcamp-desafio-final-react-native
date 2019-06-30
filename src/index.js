import '~/config/ReactotronConfig';

import React from 'react';
import { Provider } from 'react-redux';

import store from '~/stores';
import VerifyUser from './components/VerifyUser';
import '~/config/StatusBarConfig';

const App = () => (
  <Provider store={store}>
    <VerifyUser />
  </Provider>
);

export default App;
