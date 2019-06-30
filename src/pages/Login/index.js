import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginActions from '~/stores/ducks/login';
import StorageActions from '~/stores/ducks/storage';

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
    setStorageData: PropTypes.func.isRequired,
    success: PropTypes.bool.isRequired,
    data: PropTypes.shape().isRequired,
    error: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.string]),
    storageError: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.string]),
  };

  static defaultProps = {
    error: null,
    storageError: null,
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
    const {
      success,
      data,
      setStorageData,
    } = this.props;

    if (prevProps.success !== success) {
      await setStorageData(data);
    }
  }

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
    const {
      navigation,
      loading,
      error,
      storageError,
    } = this.props;

    return (
      <Container>
        <Background source={ImageBackground} />
        <Form>
          <Logo source={ImageLogo} />
          {(emptyInput || error || storageError)
            && <ErrorText>{emptyInput || error || storageError}</ErrorText>}
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
  successStorage: state.storage.success,
  error: state.login.error,
  storageError: state.storage.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...LoginActions,
    ...StorageActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
