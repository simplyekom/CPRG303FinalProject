import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Pressable, FlatList } from 'react-native';

const SearchHouseholds = ({ households }) => {
  const [selectedHousehold, setSelectedHousehold] = useState(null);

  const handlePress = (household) => {
    // Handle press action, for example, navigate to household details screen
    setSelectedHousehold(household);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search for Existing Households</Text>

      <FlatList
        data={households}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Pressable onPress={() => handlePress(item)}>
            <View style={[styles.household, selectedHousehold === item && styles.selectedHousehold]}>
              <Text style={styles.householdName}>{item.name}</Text>
              <Text style={styles.householdDetails}>{`${item.numberOfPeople} people | $${item.rentPrice}`}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  household: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#FFC0CB', // Pink color
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    backgroundColor: '#FED7E2', // Light pink background
    borderRadius: 8, // Rounded corners
  },
  selectedHousehold: {
    backgroundColor: '#FF69B4', // A different color for selected household
  },
  householdName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  householdDetails: {
    fontSize: 14,
    color: 'white',
  },
});

export default SearchHouseholds;

