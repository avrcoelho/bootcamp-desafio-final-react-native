import styled from 'styled-components/native';
import { getBottomSpace, isIphoneX } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
`;
export const Body = styled.View`
  align-items: center;
  flex: 1;
  padding: 0 20px ${isIphoneX ? `${getBottomSpace() + 20}px` : '20px'} 20px;
  background-color: #fff;
  margin: -55px 20px 0 20px;
  border-radius: 10px;
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
