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

export default class Signup extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    inputFullname: '',
    inputEmail: '',
    inputPassword: '',
    emptyInput: null,
  };

  inputs = {};

  focusTheField = id => {
    this.inputs[id].focus();
  };

  handleSubmitForm = async () => {
    const { inputFullname, inputEmail, inputPassword } = this.state;

    if (inputFullname !== '' && inputEmail !== '' && inputPassword !== '') {
      await this.setState({ emptyInput: null });
      await loginRequest(inputLogin, inputPassword);
    } else {
      this.setState({ emptyInput: 'Preencha todos os campos' });
    }
  };

  render() {
    const { inputFullname, inputEmail, inputPassword, emptyInput } = this.state;
    const { navigation } = this.props;

    return (
      <Container>
        <Background source={ImageBackground} />
        <Form>
          <Logo source={ImageLogo} />
          {emptyInput && <ErrorText>{emptyInput}</ErrorText>}
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
            ref={input => {
              this.inputs.password = input;
            }}
            onSubmitEditing={this.handleSubmitForm}
          />
          <Button onPress={this.handleSubmitForm}>
            <ButtonText>Criar conta</ButtonText>
          </Button>
          <ButtonRegister onPress={() => navigation.navigate('Login')}>
            <ButtonText>Já tenho cadastro</ButtonText>
          </ButtonRegister>
        </Form>
      </Container>
    );
  }
}
