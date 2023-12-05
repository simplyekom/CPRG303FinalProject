import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HouseholdForm from '../components/HouseholdForm';
import MainLayout from '../layouts/MainLayout';

const CreateHouseholdScreen = () => {
  const addHousehold = (newHousehold) => {
    // Handle the logic to add the household (e.g., send to backend)
    console.log('Adding Household:', newHousehold);
  };

  return (
    <MainLayout>
    <View style={styles.container}>
      <Text style={styles.title}>Create Household</Text>
      <HouseholdForm addHousehold={addHousehold} />
    </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: -15,
  },
});

export default CreateHouseholdScreen;
