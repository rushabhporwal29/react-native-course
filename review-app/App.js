import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Home from './Screens/home';

export default props => {
  let [fontsLoaded] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),  
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Home/>
  );
};