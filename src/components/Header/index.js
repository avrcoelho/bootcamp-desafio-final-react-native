import React from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import ImageHeader from '~/assets/images/header-background.png';

import {
  Container, Background, Content, Button, Title, ButtonCart, Total,
} from './styles';

const Header = ({ navigation }) => {
  let title;

  switch (navigation.state.routeName) {
    case 'Menu':
      title = 'Pizzaria Dom Juan';
      break;
    case 'Orders':
      title = 'Meus pedidos';
      break;
    case 'Flavors':
      title = 'Selecione um tipo';
      break;
    case 'Sizes':
      title = 'Selecione um tamanho';
      break;
    case 'Cart':
      title = 'Carrinho';
      break;
    default:
      title = '';
  }

  return (
    <Container>
      <Background source={ImageHeader} />
      <Content>
        {navigation.state.routeName === 'Menu' ? (
          <Button onPress={() => navigation.navigate('Orders')}>
            <Icon name="history" size={20} color="#fff" />
          </Button>
        ) : (
          <Button onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" size={20} color="#fff" />
          </Button>
        )}
        <Title page={navigation.state.routeName}>{title}</Title>
        {navigation.state.routeName === 'Menu' && (
          <ButtonCart onPress={() => navigation.navigate('Cart')}>
            <Icon name="shopping-cart" size={20} color="#fff" />
          </ButtonCart>
        )}
        {navigation.state.routeName === 'Cart' && (
          <Total>R$ 250,00</Total>
        )}
      </Content>
    </Container>
  );
};

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
    state: PropTypes.shape({
      routeName: PropTypes.string,
    }),
  }).isRequired,
};

export default withNavigation(Header);
