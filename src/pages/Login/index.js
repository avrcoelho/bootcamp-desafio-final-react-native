import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginActions from '~/stores/ducks/login';

import {
  Container,
  Background,
  Form,
  Logo,
  Input,
  Button,
  ButtonText,
  Loading,
  ButtonRegister,
  ErrorText,
} from './styles';

import ImageBackground from '~/assets/images/fundo.jpg';
import ImageLogo from '~/assets/images/logo.png';

class Login extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    loading: PropTypes.bool.isRequired,
    setLoginRequest: PropTypes.func.isRequired,
    setClearData: PropTypes.func.isRequired,
    success: PropTypes.bool.isRequired,
    data: PropTypes.shape().isRequired,
    error: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.string]),
  };

  static defaultProps = {
    error: null,
  };

  state = {
    inputEmail: '',
    inputPassword: '',
    emptyInput: null,
  };

  inputs = {};

  async componentDidMount() {
    const { setClearData } = this.props;
    await setClearData();
  }

  async componentDidUpdate(prevProps) {
    const { success, data } = this.props;

    if (prevProps.success !== success) {
      await this.setDataUserStorage(data);
    }
  }

  setDataUserStorage = async (data) => {
    try {
      const { navigation } = this.props;

      await AsyncStorage.setItem('@BootCamp:userdata', JSON.stringify(data));

      navigation.navigate('Dashboard');
    } catch (e) {
      console.tron.log('error asyncstorage');
    }
  };

  focusTheField = (id) => {
    this.inputs[id].focus();
  };

  handleSubmitForm = async () => {
    const { inputEmail, inputPassword } = this.state;
    const { setLoginRequest } = this.props;

    if (inputEmail !== '' && inputPassword !== '') {
      await this.setState({ emptyInput: null });
      await setLoginRequest(inputEmail, inputPassword);
    } else {
      this.setState({ emptyInput: 'Preencha todos os campos' });
    }
  };

  render() {
    const { inputEmail, inputPassword, emptyInput } = this.state;
    const { navigation, loading, error } = this.props;

    return (
      <Container>
        <Background source={ImageBackground} />
        <Form>
          <Logo source={ImageLogo} />
          {(emptyInput || error) && <ErrorText>{emptyInput || error}</ErrorText>}
          <Input
            label="email"
            autoCorrect={false}
            disableFullscreenUI
            placeholder="E-mail"
            underlineColorAndroid="transparent"
            value={inputEmail}
            onChangeText={text => this.setState({ inputEmail: text })}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.focusTheField('password');
            }}
          />
          <Input
            label="password"
            secureTextEntry
            autoCorrect={false}
            placeholder="Senha"
            disableFullscreenUI
            underlineColorAndroid="transparent"
            value={inputPassword}
            onChangeText={text => this.setState({ inputPassword: text })}
            ref={(input) => {
              this.inputs.password = input;
            }}
            onSubmitEditing={this.handleSubmitForm}
          />
          <Button onPress={this.handleSubmitForm}>
            {loading ? <Loading color="#fff" size="small" /> : <ButtonText>Entrar</ButtonText>}
          </Button>
          <ButtonRegister onPress={() => navigation.navigate('Signup')}>
            <ButtonText>Criar conta gratuita</ButtonText>
          </ButtonRegister>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  data: state.login.data,
  loading: state.login.loading,
  success: state.login.success,
  error: state.login.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
