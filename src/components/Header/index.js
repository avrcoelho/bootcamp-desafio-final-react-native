import React from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import CurrencyFormat from 'react-currency-format';
import { connect } from 'react-redux';

import ImageHeader from '~/assets/images/header-background.png';

import {
  Container, Background, Content, Button, Title, ButtonCart, Total,
} from './styles';

const Header = ({ navigation, totalOrder }) => {
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
    case 'FinishOrder':
      title = 'Finalizar pedido';
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
          <Button
            onPress={() => (navigation.state.routeName === 'Cart'
              ? navigation.navigate('Menu')
              : navigation.goBack())
            }
          >
            <Icon name="chevron-left" size={20} color="#fff" />
          </Button>
        )}
        <Title page={navigation.state.routeName}>{title}</Title>
        {navigation.state.routeName === 'Menu' && (
          <ButtonCart onPress={() => navigation.navigate('Cart')}>
            <Icon name="shopping-cart" size={20} color="#fff" />
          </ButtonCart>
        )}
        {(navigation.state.routeName === 'Cart'
          || navigation.state.routeName === 'FinishOrder') && (
          <CurrencyFormat
            value={totalOrder}
            thousandSeparator="."
            decimalScale={2}
            displayType="text"
            decimalSeparator=","
            fixedDecimalScale
            prefix="R$ "
            renderText={value => <Total>{value}</Total>}
          />
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
  totalOrder: PropTypes.number.isRequired,
};

const calcTotalOrder = items => items.reduce((sum, cur) => sum + cur.price, 0);

const mapStateToProps = state => ({
  totalOrder: calcTotalOrder(state.cart.data),
});

export default withNavigation(connect(mapStateToProps)(Header));
