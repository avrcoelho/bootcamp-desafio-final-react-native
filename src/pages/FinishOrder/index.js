import React, { Component } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CartActions from '~/stores/ducks/cart';
import PostalCodeActions from '~/stores/ducks/postalCode';
import OrderActions from '~/stores/ducks/orders';

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
  Loading,
} from './styles';

import Header from '~/components/Header';

class FinishOrder extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    postalCodeRequest: PropTypes.func.isRequired,
    setOrdersRequest: PropTypes.func.isRequired,
    postalCodeData: PropTypes.shape({
      logradouro: PropTypes.string,
      bairro: PropTypes.string,
    }).isRequired,
    postalCodeError: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.string]),
    loading: PropTypes.bool.isRequired,
    success: PropTypes.bool.isRequired,
    totalOrder: PropTypes.number.isRequired,
    cartData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  };

  static defaultProps = {
    postalCodeError: null,
  };

  state = {
    observationInput: '',
    postalCodeInput: '',
    addressInput: '',
    numberInput: '',
    districtInput: '',
  };

  componentDidUpdate(prevProps) {
    const {
      postalCodeData,
      postalCodeError,
      success,
      navigation,
    } = this.props;

    if (prevProps.postalCodeData !== postalCodeData) {
      this.setPostalCodeData(postalCodeData);
    }

    if (postalCodeError) {
      Alert.alert(postalCodeError);
    }

    if (prevProps.success !== success && success) {
      Alert.alert('Alerta!', 'Pedido realizado com sucesso!', [
        { text: 'OK', onPress: () => navigation.navigate('Menu') },
      ]);
    }
  }

  setPostalCodeData = (postalCodeData) => {
    this.setState({
      addressInput: postalCodeData.logradouro,
      districtInput: postalCodeData.bairro,
    });
  };

  handleFinishOrder = async () => {
    const { cartData, totalOrder, setOrdersRequest } = this.props;
    const {
      observationInput,
      postalCodeInput,
      addressInput,
      numberInput,
      districtInput,
    } = this.state;

    if (
      postalCodeInput === ''
      || addressInput === ''
      || numberInput === ''
      || districtInput === ''
    ) {
      Alert.alert('Preencha todos os campos obrigatórios!');
    } else {
      const orderData = {
        total: totalOrder,
        observation: observationInput,
        postalCode: postalCodeInput,
        address: addressInput,
        number: numberInput,
        district: districtInput,
        items: cartData,
      };


      await setOrdersRequest(orderData);
    }
  };

  handleGetPostalCode = async () => {
    const { postalCodeRequest } = this.props;
    const { postalCodeInput } = this.state;

    if (postalCodeInput !== '') {
      postalCodeRequest(postalCodeInput);
    }
  };

  render() {
    const { loading } = this.props;
    const {
      observationInput,
      postalCodeInput,
      addressInput,
      numberInput,
      districtInput,
    } = this.state;

    return (
      <Container>
        <Header />
        <Body>
          <Form>
            <Observation
              placeholder="Alguma observação?"
              disableFullscreenUI
              value={observationInput}
              onChangeText={text => this.setState({ observationInput: text })}
              underlineColorAndroid="transparent"
              multiline
            />
            <PostalCode
              placeholder="Qual o seu CEP? *"
              disableFullscreenUI
              value={postalCodeInput}
              onChangeText={text => this.setState({ postalCodeInput: text })}
              onBlur={this.handleGetPostalCode}
              underlineColorAndroid="transparent"
              keyboardType="numeric"
            />
            <Inline>
              <Address
                placeholder="Rua *"
                disableFullscreenUI
                value={addressInput}
                onChangeText={text => this.setState({ addressInput: text })}
                underlineColorAndroid="transparent"
              />
              <Number
                placeholder="Nº *"
                disableFullscreenUI
                value={numberInput}
                onChangeText={text => this.setState({ numberInput: text })}
                underlineColorAndroid="transparent"
                keyboardType="numeric"
              />
            </Inline>
            <District
              placeholder="Bairro *"
              disableFullscreenUI
              value={districtInput}
              onChangeText={text => this.setState({ districtInput: text })}
              underlineColorAndroid="transparent"
            />
          </Form>
          <ButtonContainer>
            <ButtonFinish onPress={this.handleFinishOrder}>
              <ButtonFinishText>Finalizar</ButtonFinishText>
              {loading ? (
                <Loading color="#fff" size="small" />
              ) : (
                <Icon name="chevron-right" size={25} color="#fff" />
              )}
            </ButtonFinish>
          </ButtonContainer>
        </Body>
      </Container>
    );
  }
}

const calcTotalOrder = items => items.reduce((sum, cur) => sum + cur.price, 0);

const mapStateToProps = state => ({
  postalCodeData: state.postalCode.data,
  postalCodeError: state.postalCode.error,
  loading: state.orders.setLoading,
  success: state.orders.setSuccess,
  cartData: state.cart.items,
  totalOrder: calcTotalOrder(state.cart.items),
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...CartActions,
    ...PostalCodeActions,
    ...OrderActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FinishOrder);
