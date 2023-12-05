import React from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({ navigation }) => {
  return (
    <MainLayout>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.viewhousehold}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('View Household')}
          >
            <Text style={styles.buttonText}>View Household</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.createhousehold}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Create Household')}
          >
            <Text style={styles.buttonText}>Create Household</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.searchhousehold}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Search Existing Household')}
          >
            <Text style={styles.buttonText}>Search Existing Household</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  viewhousehold: {
    marginTop: 170,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },
  createhousehold: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },
  searchhousehold: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'white', 
    borderWidth: 1, 
    borderColor: 'black', 
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black', 
    textAlign: 'center',
  },
});

export default HomeScreen;
