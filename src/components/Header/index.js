import React from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import ImageHeader from '~/assets/images/header-background.png';

import {
  Container, Background, Content, Button, Title, ButtonCart,
} from './styles';

const Header = ({ navigation }) => {
  let title;

  switch (navigation.state.routeName) {
    case 'Menu':
      title = 'Pizzaria Dom Juan';
      break;
    default:
      title = '';
  }

  return (
    <Container>
      <Background source={ImageHeader} />
      <Content>
        <Button onPress={() => {}}>
          <Icon name="history" size={20} color="#fff" />
        </Button>
        <Title>{title}</Title>
        <ButtonCart onPress={() => {}}>
          <Icon name="shopping-cart" size={20} color="#fff" />
        </ButtonCart>
      </Content>
    </Container>
  );
};

Header.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      routeName: PropTypes.string,
    }),
  }).isRequired,
};

export default withNavigation(Header);
