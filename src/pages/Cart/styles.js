import styled from 'styled-components/native';
import { getBottomSpace, isIphoneX } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
`;
export const Body = styled.View`
  align-items: center;
  ${props => props.cartEmpty && 'flex: 1;justify-content: center;'}
  margin: -55px 0 0 0;
  padding-bottom: ${isIphoneX ? `${getBottomSpace() + 20}px` : '20px'};
`;

export const ListCart = styled.FlatList`
  width: 100%;
`;

export const Item = styled.View`
  width: 100%;
  height: 125px;
  padding: 10px;
`;

export const ContentItem = styled.View.attrs({
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

export const Size = styled.Text`
  font-family: Helvetica;
  font-size: 11px;
  color: #706e7b;
  letter-spacing: 0;
  line-height: 14px;
  text-align: left;
  margin-top: 5px;
`;

export const Price = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 16px;
  color: #0b2031;
  letter-spacing: 0;
  margin-top: 8px;
`;

export const ButtonRemove = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  padding: 5px;
`;
export const ButtonContainer = styled.View`
  width: 100%;
  height: auto;
  margin-top: 20px;
  padding: 0 8px;
  justify-content: space-between;
  flex-direction: row;
`;
export const ButtonAddMore = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  height: 40px;
  width: 40px;
  background-color: #ccc;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
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

export const TextEmptyCart = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 18px;
  color: #999;
  letter-spacing: 0;
  text-align: center;
`;
