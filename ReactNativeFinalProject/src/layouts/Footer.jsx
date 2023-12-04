import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>🌸 This is the Footer 🌸</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#FFC0CB', // Pink color
    padding: 15,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
    elevation: 3, // Add shadow for a subtle lift
  },
  footerText: {
    color: 'white', // White text color for contrast
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic', // Italicize the text
  },
});

export default Footer;
