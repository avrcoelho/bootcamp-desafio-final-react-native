import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
import Menu from '~/pages/Menu';
import Orders from '~/pages/Orders';

const appNavigation = () => createStackNavigator(
  {
    Menu,
    Orders,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const Routes = (userLogged = false) => createAppContainer(
  createSwitchNavigator(
    {
      Login,
      Signup,
      Dashboard: appNavigation(),
    },
    {
      initialRouteName: userLogged ? 'Dashboard' : 'Login',
    },
  ),
);

export default Routes;
