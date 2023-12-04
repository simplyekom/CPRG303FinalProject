import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const getDate = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
};

const AboutScreen = () => {
  const [currentDate, setCurrentDate] = useState(getDate());

  return (
    <MainLayout>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.header}>App Name: Better Together</Text>
          <Text style={styles.text}>Name: Ekom Uffort</Text>
          <Text style={styles.text}>Today's Date: {currentDate}</Text>
        </View>
      </SafeAreaView>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    margin: 20,
    alignItems: 'center',
    backgroundColor: '#FFC0CB', // Pink color
    padding: 20,
    borderRadius: 20,
    elevation: 3, // Add shadow for a subtle lift
  },
  header: {
    fontSize: 24,
    fontFamily: 'monospace',
    marginBottom: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    fontFamily: 'monospace',
    marginBottom: 10,
    color: 'white',
  },
});

export default AboutScreen;
