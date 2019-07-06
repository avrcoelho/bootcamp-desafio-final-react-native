import styled from 'styled-components/native';
import { getBottomSpace, isIphoneX } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
`;
export const Body = styled.View`
  align-items: center;
  flex: 1;
  margin: -45px 0 0 0;
  padding-bottom: ${isIphoneX ? `${getBottomSpace() + 20}px` : '20px'};
`;

export const ListOrders = styled.FlatList`
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

export const Order = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: 100%;
  height: 100px;
  padding: 0 8px;
  margin-bottom: 15px;
`;

export const ContentOrder = styled.View.attrs({
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
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 15px;
  background-color: #fff;
`;

export const OrderNumber = styled.Text`
  font-family: Helvetica;
  font-size: 14px;
  color: #0b2031;
  letter-spacing: 0;
  text-align: left;
`;

export const Time = styled.Text`
  font-family: Helvetica;
  font-size: 10px;
  color: #706e7b;
  letter-spacing: 0.46px;
  margin-top: 5px;
`;

export const Total = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 16px;
  color: #0b2031;
  letter-spacing: 0;
  margin-top: 8px;
`;
