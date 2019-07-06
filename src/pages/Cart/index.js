import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import CurrencyFormat from 'react-currency-format';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CartActions from '~/stores/ducks/cart';

import {
  Container,
  Body,
  ListCart,
  Item,
  ContentItem,
  InfoContainer,
  Image,
  Name,
  Size,
  Price,
  ButtonRemove,
  ButtonContainer,
  ButtonAddMore,
  ButtonFinish,
  ButtonFinishText,
  TextEmptyCart,
} from './styles';

import Header from '~/components/Header';

class Cart extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      getParam: PropTypes.func,
    }).isRequired,
    item: PropTypes.shape({
      nameProd: PropTypes.string,
      productId: PropTypes.string,
      typeProd: PropTypes.string,
      typeId: PropTypes.string,
      imageProd: PropTypes.string,
      priceProd: PropTypes.number,
      sizeProd: PropTypes.string,
      sizeId: PropTypes.string,
    }).isRequired,
    addItemCart: PropTypes.func.isRequired,
    removeItemCart: PropTypes.func.isRequired,
    cartList: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      type: PropTypes.string,
      size: PropTypes.string,
      price: PropTypes.number,
      url: PropTypes.string,
    })).isRequired,
  };

  async componentDidMount() {
    const {
      navigation,
      addItemCart,
      item: {
        nameProd,
        productId,
        typeProd,
        typeId,
        imageProd,
        priceProd,
        sizeProd,
        sizeId,
      },
    } = this.props;

    const addCart = navigation.getParam('addCart');

    if (addCart) {
      const item = {
        id: Math.random(),
        name: nameProd,
        type: typeProd,
        size: sizeProd,
        price: priceProd,
        url: imageProd,
        productId,
        typeId,
        sizeId,
      };

      await addItemCart(item);
    }
  }

  handleRemoveItem = async (id) => {
    const { removeItemCart } = this.props;

    await removeItemCart(id);
  }

  render() {
    const { cartList, navigation } = this.props;

    return (
      <Container>
        <Header />
        <Body cartEmpty={!cartList.length}>
          {cartList.length ? (
            <>
              <ListCart
                data={cartList}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                  <Item>
                    <ContentItem>
                      <Image source={{ uri: item.url }} />
                      <InfoContainer>
                        <Name>{`${item.name} ${item.type}`}</Name>
                        <Size>{item.size}</Size>
                        <CurrencyFormat
                          value={item.price}
                          thousandSeparator="."
                          decimalScale={2}
                          displayType="text"
                          decimalSeparator=","
                          fixedDecimalScale
                          prefix="R$ "
                          renderText={value => <Price>{value}</Price>}
                        />
                      </InfoContainer>
                      <ButtonRemove onPress={() => this.handleRemoveItem(item.id)}>
                        <Icon name="delete" color="#e5293e" size={20} />
                      </ButtonRemove>
                    </ContentItem>
                  </Item>
                )}
              />
              <ButtonContainer>
                <ButtonAddMore onPress={() => navigation.navigate('Menu')}>
                  <Icon name="shopping-cart" size={20} color="#666" />
                </ButtonAddMore>
                <ButtonFinish onPress={() => navigation.navigate('FinishOrder')}>
                  <ButtonFinishText>Realizar pedidio</ButtonFinishText>
                  <Icon name="shopping-cart" size={20} color="#fff" />
                </ButtonFinish>
              </ButtonContainer>
            </>
          ) : (
            <>
              <Icon name="shopping-cart" color="#999" size={150} />
              <TextEmptyCart>Carrinho vazio</TextEmptyCart>
            </>
          )}
        </Body>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  item: state.products,
  cartList: state.cart.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
