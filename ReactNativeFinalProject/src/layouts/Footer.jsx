import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}> </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#FFB6C1', 
    padding: 15,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
    elevation: 3, 
  },
  footerText: {
    color: 'white', 
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default Footer;
