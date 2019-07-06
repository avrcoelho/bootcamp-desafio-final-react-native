import styled from 'styled-components/native';
import { getBottomSpace, isIphoneX } from 'react-native-iphone-x-helper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const Container = styled(KeyboardAwareScrollView).attrs({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'stretch',
  },
  keyboardShouldPersistTaps: 'handled',
  enableResetScrollToCoords: false,
})``;

export const Body = styled.View`
  align-items: center;
  margin: -45px 0 0 0;
  padding-bottom: ${isIphoneX ? `${getBottomSpace() + 20}px` : '20px'};
`;

export const Form = styled.View`
  width: 100%;
  height: auto;
  flex-direction: column;
  padding: 0 8px;
`;

export const Observation = styled.TextInput.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 2,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
})`
  width: 100%;
  height: 200px;
  padding: 10px;
  font-family: Helvetica;
  font-size: 15px;
  color: #666;
  letter-spacing: 0;
  text-align: left;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 10px;
  justify-content: flex-start;
`;
export const PostalCode = styled.TextInput.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 2,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
})`
  width: 100%;
  height: 54px;
  padding: 10px;
  font-family: Helvetica;
  font-size: 15px;
  color: #666;
  letter-spacing: 0;
  text-align: left;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 10px;
`;

export const Inline = styled.View`
  width: 100%;
  height: auto;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Address = styled.TextInput.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 2,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
})`
  flex: 1;
  height: 54px;
  padding: 10px;
  font-family: Helvetica;
  font-size: 15px;
  color: #666;
  letter-spacing: 0;
  text-align: left;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 10px;
  margin-right: 15px;
`;
export const Number = styled.TextInput.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 2,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
})`
  width: 80px;
  height: 54px;
  padding: 10px;
  font-family: Helvetica;
  font-size: 15px;
  color: #666;
  letter-spacing: 0;
  text-align: left;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 10px;
`;
export const District = styled.TextInput.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 2,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
})`
  width: 100%;
  height: 54px;
  padding: 10px;
  font-family: Helvetica;
  font-size: 15px;
  color: #666;
  letter-spacing: 0;
  text-align: left;
  background-color: #fff;
  border-radius: 10px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  height: auto;
  margin-top: 20px;
  padding: 0 8px;
  justify-content: flex-end;
  flex-direction: row;
`;

export const ButtonFinish = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  height: 40px;
  width: 200px;
  background-color: #e5283e;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  flex-direction: row;
  padding: 0 20px;
`;

export const ButtonFinishText = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 14px;
  color: #fff;
  letter-spacing: 0;
  text-align: center;
  text-transform: uppercase;
`;

export const Loading = styled.ActivityIndicator``;
