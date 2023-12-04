import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <ImageBackground
      source={require('../images/pinkbackground.jpeg')} // Replace with the correct path
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
    resizeMode: 'cover', // or 'stretch' for different image resizing options
    padding: 0,
  },
});

export default MainLayout;

