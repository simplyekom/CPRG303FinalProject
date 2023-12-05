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

const ViewHouseholdScreen = () => {
  const [currentDate, setCurrentDate] = useState(getDate());

  return (
    <MainLayout>
      <SafeAreaView style={styles.safeArea}>
        
        {/* Members' Names Section */}
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryHeader}>Members Names</Text>
          {<Text> Jane Smith                Chanel Briggs</Text>}
        </View>

        {/* Chores List Section */}
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryHeader}>Chores List</Text>
          {<Text> Clean the kitchen     Vacuum the living room </Text>}
          {<Text> Clean the bathroom     Dust the furnitures </Text>}
        </View>

        {/* Grocery List and Notes Sections (Side by Side) */}
        <View style={styles.sideBySideContainer}>
          {/* Grocery List Section */}
          <View style={styles.verticalCategoryContainer}>
            <Text style={styles.categoryHeader}>Grocery List</Text>
            {<Text> Banana</Text>}
            {<Text> Eggs</Text>}
            {<Text> Bacon</Text>}
            {<Text> Rice</Text>}
            {<Text> Bread</Text>}
            {<Text> Kimchi</Text>}
            {<Text> Chicken</Text>}
            {<Text> Beef</Text>}
            {<Text> IceCream</Text>}
            {<Text> Dumplings</Text>}
          </View>

          {/* Notes Section */}
          <View style={styles.verticalCategoryContainer}>
            <Text style={styles.categoryHeader}>Notes</Text>
            {<Text> - Remember to pay rent on the first</Text>}
            {<Text> </Text>}
            {<Text> -Milk is expiring in 3 days</Text>}
            
          </View>
        </View>

      </SafeAreaView>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  categoryContainer: {
    margin: 20,
    alignItems: 'center',
    backgroundColor: '#FFC0CB', // Pink color
    padding: 20,
    borderRadius: 20,
    elevation: 3, // Add shadow for a subtle lift
    marginBottom: 20,
  },
  categoryHeader: {
    fontSize: 20,
    fontFamily: 'monospace',
    marginBottom: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  sideBySideContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  verticalCategoryContainer: {
    flex: 1,
    margin: 20,
    backgroundColor: '#FFC0CB', // Pink color
    padding: 20,
    borderRadius: 20,
    elevation: 3, // Add shadow for a subtle lift
    marginBottom: 20,
  },
});

export default ViewHouseholdScreen;
