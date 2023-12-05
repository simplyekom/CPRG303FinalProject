import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Pressable, FlatList, TextInput } from 'react-native';

const SearchHouseholds = ({ households }) => {
  const [selectedHousehold, setSelectedHousehold] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handlePress = (household) => {
    // Handle press action, for example, navigate to household details screen
    setSelectedHousehold(household);
  };

  const filteredHouseholds = households.filter((household) =>
    household.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search for Existing Households</Text>

      {/* Add TextInput for search */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search by household name"
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
      />

      {/* Add label for proximity */}
      <Text style={styles.proximityLabel}>Household Names Within Close Proximity:</Text>


      <FlatList
        data={filteredHouseholds}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          
          <Pressable onPress={() => handlePress(item)}>
            <View style={[styles.household, selectedHousehold === item && styles.selectedHousehold]}>
              <Text style={styles.householdName}>{item.name}</Text>
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
    marginBottom: 25,
    marginTop: 20,
    color: 'black'
  },
  searchInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 25,
    paddingLeft: 10,
    width: '80%',
  },
  household: {
    padding: 10,
    borderBottomWidth: 2,
    borderColor: 'white', 
    marginLeft: 10,
    marginRight: 10,
    marginTop: 12,
    backgroundColor: '#FED7E2', 
    borderRadius: 8, 
  },
  selectedHousehold: {
    backgroundColor: '#FF69B4', 
  },
  householdName: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  proximityLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black', 
  },
});

export default SearchHouseholds;
