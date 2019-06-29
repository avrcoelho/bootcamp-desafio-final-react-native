import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SignupActions from '~/stores/ducks/signup';

import {
  Container,
  Background,
  Form,
  Text,
  Icon,
  Logo,
  Input,
  Button,
  ButtonText,
  ButtonRegister,
  Loading,
  ErrorText,
} from './styles';

import ImageBackground from '~/assets/images/fundo.jpg';
import ImageLogo from '~/assets/images/logo.png';

class Signup extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    success: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.string]),
    loading: PropTypes.bool.isRequired,
    setSignupClear: PropTypes.func.isRequired,
    setSignupRequest: PropTypes.func.isRequired,
  };

  static defaultProps = {
    error: null,
  };

  state = {
    inputFullname: '',
    inputEmail: '',
    inputPassword: '',
    emptyInput: null,
  };

  inputs = {};

  async componentDidMount() {
    const { setSignupClear } = this.props;

    await setSignupClear();
  }

  focusTheField = (id) => {
    this.inputs[id].focus();
  };

  handleSubmitForm = async () => {
    const { inputFullname, inputEmail, inputPassword } = this.state;

    if (inputFullname !== '' && inputEmail !== '' && inputPassword !== '') {
      this.setState({ emptyInput: null });
      const { setSignupRequest } = this.props;

      await setSignupRequest(inputFullname, inputEmail, inputPassword);
    } else {
      this.setState({ emptyInput: 'Preencha todos os campos' });
    }
  };

  render() {
    const {
      inputFullname, inputEmail, inputPassword, emptyInput,
    } = this.state;
    const {
      navigation, loading, error, success,
    } = this.props;

    return (
      <Container>
        <Background source={ImageBackground} />
        <Form>
          <Logo source={ImageLogo} />
          {(emptyInput || error) && <ErrorText>{emptyInput || error}</ErrorText>}
          {success ? (
            <>
              <Icon name="check-circle" size={200} color="#fff" />
              <Text>Cadastro reealizado com sucesso!</Text>
            </>
          ) : (
            <>
              <Input
                label="fullname"
                autoCorrect={false}
                disableFullscreenUI
                placeholder="Nome completo"
                underlineColorAndroid="transparent"
                value={inputFullname}
                onChangeText={text => this.setState({ inputFullname: text })}
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() => {
                  this.focusTheField('email');
                }}
              />
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
                {loading ? (
                  <Loading color="#fff" size="small" />
                ) : (
                  <ButtonText>Criar conta</ButtonText>
                )}
              </Button>
            </>
          )}
          <ButtonRegister onPress={() => navigation.navigate('Login')}>
            <ButtonText>Já tenho cadastro</ButtonText>
          </ButtonRegister>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.signup.loading,
  success: state.signup.success,
  error: state.signup.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(SignupActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);
