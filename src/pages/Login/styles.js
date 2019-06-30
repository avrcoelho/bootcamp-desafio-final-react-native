import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

export const Background = styled.ImageBackground.attrs({
  imageStyle: { resizeMode: 'cover' },
})`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.4;
`;

export const Form = styled.View`
  padding: 0 20px;
  width: 100%;
  height: auto;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 72px;
  height: 72px;
  margin-bottom: 30px;
`;

export const Input = styled.TextInput`
  height: 54px;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 0 10px;
  font-family: Helvetica-Bold;
  font-size: 15px;
  background-color: #fff;
  font-weight: normal;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  height: 54px;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;
  background-color: #e5283e;
`;

export const ButtonRegister = styled.TouchableWithoutFeedback``;

export const ButtonText = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 15px;
  color: #ffffff;
  letter-spacing: 0;
`;

export const Loading = styled.ActivityIndicator``;

export const ErrorText = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 15px;
  color: #f00;
  letter-spacing: 0;
  margin-bottom: 15px;
`;
