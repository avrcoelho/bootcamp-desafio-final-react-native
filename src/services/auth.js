import AsyncStorage from '@react-native-community/async-storage';

export const isAuthenticated = async () => {
  try {
    const data = await AsyncStorage.getItem('@BootCamp:userdata');

    if (data) {
      const { token } = JSON.parse(data);

      console.log(token);

      if (token) {
        return token;
      }
    }

    return false;
  } catch (e) {
    console.tron.log('error asyncstorage');
  }
};
