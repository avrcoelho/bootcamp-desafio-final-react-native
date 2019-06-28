import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';

import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
import Home from '~/pages/Home';

const appNavigation = () =>
  createStackNavigator({
    Home,
  });

const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Login,
        Signup,
        appNavigation: appNavigation(),
      },
      {
        initialRouteName: userLogged ? 'appNavigation' : 'Login',
      },
    ),
  );

export default Routes;
