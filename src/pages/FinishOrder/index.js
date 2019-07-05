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
  Form,
  Observation,
  PostalCode,
  Inline,
  Address,
  Number,
  District,
  ButtonContainer,
  ButtonFinish,
  ButtonFinishText,
} from './styles';

import Header from '~/components/Header';

class FinishOrder extends Component {
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

  handleNextStage = async (product) => {
    const { setSelectTypes, navigation } = this.props;

    await setSelectTypes(product);
    navigation.navigate('Flavors');
  };

  render() {
    const { cartList, navigation } = this.props;

    return (
      <Container>
        <Header />
        <Body>
          <Form>
            <Observation
              placeholder="Alguma observação?"
              disableFullscreenUI
              value=""
              underlineColorAndroid="transparent"
              multiline
            />
            <PostalCode
              placeholder="Qual o seu CEP?"
              disableFullscreenUI
              value=""
              underlineColorAndroid="transparent"
            />
            <Inline>
              <Address
                placeholder="Rua"
                disableFullscreenUI
                value=""
                underlineColorAndroid="transparent"
              />
              <Number
                placeholder="Nº"
                disableFullscreenUI
                value=""
                underlineColorAndroid="transparent"
              />
            </Inline>
            <District
              placeholder="Bairro"
              disableFullscreenUI
              value=""
              underlineColorAndroid="transparent"
            />
          </Form>
          <ButtonContainer>
            <ButtonFinish onPress={() => navigation.navigate('Menu')}>
              <ButtonFinishText>Finalizar</ButtonFinishText>
              <Icon name="chevron-right" size={25} color="#fff" />
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
)(FinishOrder);
