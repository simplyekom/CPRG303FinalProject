import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import SearchHouseholds from '../components/SearchHouseholds'; // Import the SearchHouseholds component

const getDate = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
};

const SearchHouseholdScreen = () => {
  const [currentDate, setCurrentDate] = useState(getDate());

  // Sample data for households
  
  const households = [
    { name: 'MelodysHome'},
    { name: 'SuperAwesomeHome'},
    { name: 'KadensHome'},
    { name: 'HeathersHome'},
    { name: 'BestestHome'},
    { name: 'EllasHome'},
    { name: 'DereksHome'},
    { name: 'YunjiiHome'},
    // Add more households as needed
  ];

  return (
    <MainLayout>
      <SafeAreaView style={styles.safeArea}>

        
        
        {/* Display the SearchHouseholds component */}
        <SearchHouseholds households={households} />

        

      </SafeAreaView>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default SearchHouseholdScreen;
