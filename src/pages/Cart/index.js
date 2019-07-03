import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import CurrencyFormat from 'react-currency-format';

import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';

import ProductsActions from '~/stores/ducks/products';

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
} from './styles';

import Header from '~/components/Header';

class Cart extends Component {
  static propTypes = {
    setProductsRequest: PropTypes.func.isRequired,
    setProductsRefresh: PropTypes.func.isRequired,
    products: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.shape()]),
    error: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.string]),
    refreshing: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    setSelectTypes: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  static defaultProps = {
    cartList: [{
      id: 1,
      name: 'Teste',
      size: 'Grande',
      price: 10,
      url: 'http://localhost:3333/images/19b962d6963e109ed79dd57450636660-1.png'
    }, {
      id: 2,
      name: 'Teste',
      size: 'Grande',
      price: 10,
      url: 'http://localhost:3333/images/19b962d6963e109ed79dd57450636660-1.png'
    }],
    error: null,
  };

  handleNextStage = async (product) => {
    const { setSelectTypes, navigation } = this.props;

    await setSelectTypes(product);
    navigation.navigate('Flavors');
  };

  render() {
    const {cartList, navigation} = this.props;

    return (
      <Container>
        <Header />
        <Body>
          <ListCart
            data={cartList}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Item>
                <ContentItem>
                  <Image source={{ uri: item.url }} />
                  <InfoContainer>
                    <Name>{item.name}</Name>
                    <Size>
                      {item.size}
                    </Size>
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
                  <ButtonRemove onPress={() => {}}>
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
            <ButtonFinish onPress={() => navigation.navigate('Menu')}>
              <ButtonFinishText>Realizar pedidio</ButtonFinishText>
              <Icon name="shopping-cart" size={20} color="#fff" />
            </ButtonFinish>
          </ButtonContainer>
        </Body>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.data,
  loading: state.products.loading,
  refreshing: state.products.refreshing,
  error: state.products.error,
  types: state.products.types,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
