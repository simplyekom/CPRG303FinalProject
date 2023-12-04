import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>🌸 Better Together 🌸</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#FFC0CB', // Pink color
    padding: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 3, // Add shadow for a subtle lift
  },
  headerText: {
    color: 'white', // White text color for contrast
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase', // Uppercase text
  },
});

export default Header;

