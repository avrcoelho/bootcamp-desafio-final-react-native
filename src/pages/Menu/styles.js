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

export const ListProducts = styled.FlatList`
  width: 100%;
`;

export const Loading = styled.ActivityIndicator`
  margin-top: 20px;
`;

export const ErrorText = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 15px;
  color: #f00;
  letter-spacing: 0;
  margin-top: 20px;
`;

export const Product = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: 100%;
  height: 125px;
  padding: 10px;
`;

export const ContentProduct = styled.View.attrs({
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
  flex-direction: row;
  border-radius: 10px;
  align-items: center;
  background-color: #fff;
`;

export const Image = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 10px;
  margin-right: 20px;
`;

export const InfoContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const Name = styled.Text`
  font-family: Helvetica;
  font-size: 14px;
  color: #0b2031;
  letter-spacing: 0;
  text-align: left;
`;

export const Description = styled.Text`
  font-family: Helvetica;
  font-size: 11px;
  color: #706e7b;
  letter-spacing: 0;
  line-height: 14px;
  text-align: left;
  margin-top: 5px;
`;

export const DeliveryTime = styled.View`
  flex-direction: row;
  margin-top: 5px;
  align-items: center;
`;

export const Time = styled.Text`
  font-family: Helvetica;
  font-size: 10px;
  color: #706e7b;
  letter-spacing: 0.46px;
  text-align: left;
  margin-left: 3px;
`;
