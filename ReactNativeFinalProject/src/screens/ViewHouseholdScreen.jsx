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
          <Text style={styles.text}>Jane Smith                Chanel Briggs</Text>
        </View>

        {/* Chores List Section */}
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryHeader}>Chores List</Text>
          <Text style={styles.text}>Clean the kitchen     Vacuum the living room</Text>
          <Text style={styles.text}>Clean the bathroom     Dust the furnitures</Text>
        </View>

        {/* Grocery List and Notes Sections (Side by Side) */}
        <View style={styles.sideBySideContainer}>
          {/* Grocery List Section */}
          <View style={styles.verticalCategoryContainer}>
            <Text style={styles.categoryHeader}>Grocery List</Text>
            <Text style={styles.text}>Banana</Text>
            <Text style={styles.text}>Eggs</Text>
            <Text style={styles.text}>Bacon</Text>
            <Text style={styles.text}>Rice</Text>
            <Text style={styles.text}>Bread</Text>
            <Text style={styles.text}>Kimchi</Text>
            <Text style={styles.text}>Chicken</Text>
            <Text style={styles.text}>Beef</Text>
            <Text style={styles.text}>IceCream</Text>
            <Text style={styles.text}>Dumplings</Text>
          </View>

          {/* Notes Section */}
          <View style={styles.verticalCategoryContainer}>
            <Text style={styles.categoryHeader}>Notes</Text>
            <Text style={styles.text}>- Remember to pay rent on the first</Text>
            <Text style={styles.text}></Text>
            <Text style={styles.text}>- Milk is expiring in 3 days</Text>
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
    backgroundColor: '#FFC0CB', 
    padding: 20,
    borderRadius: 20,
    elevation: 3,
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
    backgroundColor: '#FFC0CB',
    padding: 20,
    borderRadius: 20,
    elevation: 3, 
    marginBottom: 20,
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
});

export default ViewHouseholdScreen;
