import styled from 'styled-components/native';
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  width: 100%;
  height: 160px;
  align-items: center;
`;

export const Background = styled.ImageBackground`
  width: 100%;
  height: 160px;
  background-color: #fff;
  position: absolute;
`;

export const Content = styled.View`
  width: 100%;
  margin-top: ${isIphoneX ? `${getStatusBarHeight() + 20}px` : '20px'};
  flex-direction: row;
  padding: 0 20px;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  flex: 1;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  height: 30px;
  width: 30px;
`;

export const ButtonCart = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  height: 40px;
  width: 40px;
  background-color: #e5283e;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;
