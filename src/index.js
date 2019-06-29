import '~/config/ReactotronConfig';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import store from '~/stores';
import createNavigator from './routes';
import '~/config/StatusBarConfig';

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false,
  };

  async componentDidMount() {
    try {
      // AsyncStorage.clear();
      const storage = await AsyncStorage.getItem('@BootCamp:userdata');

      await this.setState({ userChecked: true, userLogged: !!storage });
    } catch (err) {
      console.tron.log(false);
    }
  }

  render() {
    const { userChecked, userLogged } = this.state;

    // para não retornar nada
    if (!userChecked) return null;

    const Routes = createNavigator(userLogged);

    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
