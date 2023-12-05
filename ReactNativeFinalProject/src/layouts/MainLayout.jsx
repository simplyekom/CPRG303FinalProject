import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <ImageBackground
      source={require('../images/pinkbackground.jpeg')} 
      style={styles.container}
    >
      <Header />
      {children}
      <Footer />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    padding: 0,
  },
});

export default MainLayout;

