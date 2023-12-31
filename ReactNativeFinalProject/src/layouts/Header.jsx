import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../images/btlogo.png')}
          style={styles.logo}
          resizeMode="contain" 
        />
      </View>
      <Text style={styles.headerText}> Better Together </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#FFB6C1',
    padding: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 3,
    flexDirection: 'row', 
  },
  logoContainer: {
    marginRight: 0, 
  },
  logo: {
    marginLeft:20,
    width: 80,
    height: 60,
  },
  headerText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default Header;


