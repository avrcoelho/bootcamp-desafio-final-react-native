import styled from 'styled-components/native';
import { getBottomSpace, isIphoneX } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
`;
export const Body = styled.View`
  align-items: center;
  flex: 1;
  margin: -55px 0 0 0;
  padding-bottom: ${isIphoneX ? `${getBottomSpace() + 20}px` : '20px'};
`;

export const ListFlavors = styled.FlatList`
  width: 100%;
`;

export const Flavor = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: 50%;
  height: 160px;
  padding: 0 20px;
  margin-bottom: 15px;
`;

export const ContentFlavor = styled.View.attrs({
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
  height: 100%;
  padding: 15px;
  flex-direction: column;
  border-radius: 10px;
  margin-bottom: 15px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 10px;
`;

export const Name = styled.Text`
  font-family: Helvetica;
  font-size: 14px;
  color: #0b2031;
  letter-spacing: 0;
  text-align: center;
  margin-top: 15px;
`;
