import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
import Menu from '~/pages/Menu';
import Flavors from '~/pages/Flavors';
import Sizes from '~/pages/Sizes';
import Cart from '~/pages/Cart';
import Orders from '~/pages/Orders';
import FinishOrder from '~/pages/FinishOrder';

const appNavigation = () => createStackNavigator(
  {
    Menu,
    Orders,
    Flavors,
    Sizes,
    Cart,
    FinishOrder,
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
