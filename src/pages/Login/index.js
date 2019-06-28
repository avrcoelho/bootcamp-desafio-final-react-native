import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Background,
  Form,
  Logo,
  Input,
  Button,
  ButtonText,
  ButtonRegister,
  ErrorText,
} from './styles';

import ImageBackground from '~/assets/images/fundo.jpg';
import ImageLogo from '~/assets/images/logo.png';

export default class Login extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    inputEmail: '',
    inputPassword: '',
    emptyInput: null,
  };

  inputs = {};

  focusTheField = id => {
    this.inputs[id].focus();
  };

  handleSubmitForm = async () => {
    const { inputEmail, inputPassword } = this.state;

    if (inputEmail !== '' && inputPassword !== '') {
      await this.setState({ emptyInput: null });
      await loginRequest(inputEmail, inputPassword);
    } else {
      this.setState({ emptyInput: 'Preencha todos os campos' });
    }
  };

  render() {
    const { inputEmail, inputPassword, emptyInput } = this.state;
    const { navigation } = this.props;

    return (
      <Container>
        <Background source={ImageBackground} />
        <Form>
          <Logo source={ImageLogo} />
          {emptyInput && <ErrorText>{emptyInput}</ErrorText>}
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
            ref={input => {
              this.inputs.password = input;
            }}
            onSubmitEditing={this.handleSubmitForm}
          />
          <Button onPress={this.handleSubmitForm}>
            <ButtonText>Entrar</ButtonText>
          </Button>
          <ButtonRegister onPress={() => navigation.navigate('Signup')}>
            <ButtonText>Criar conta gratuita</ButtonText>
          </ButtonRegister>
        </Form>
      </Container>
    );
  }
}
