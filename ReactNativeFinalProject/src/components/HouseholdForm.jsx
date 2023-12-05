import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

const HouseholdForm = ({ addHousehold }) => {
  const [householdName, setHouseholdName] = useState('');
  const [sharedSpaceType, setSharedSpaceType] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [rentPrice, setRentPrice] = useState('');
  const [utilitiesCost, setUtilitiesCost] = useState('');
  const [petsAllowed, setPetsAllowed] = useState('');
  const [nearestPublicTransport, setTransportFees] = useState('');
  const [groceryStoresNearby, setGroceryBudget] = useState('');
  const [nearestHealthcareFacility, setRestrictions] = useState('');

  const handleSubmit = () => {
    const newHousehold = {
      name: householdName,
      sharedSpaceType,
      numberOfPeople,
      rentPrice,
      utilitiesCost,
      petsAllowed,
      transportFees,
      groceryBudget,
      restrictions,
    };

    addHousehold(newHousehold);

    setHouseholdName('');
    setSharedSpaceType('');
    setNumberOfPeople('');
    setRentPrice('');
    setUtilitiesCost('');
    setPetsAllowed('');
    setTransportFees('');
    setGroceryBudget('');
    setRestrictions('');
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Household Name"
          onChangeText={(text) => setHouseholdName(text)}
          value={householdName}
        />
        <TextInput
          style={styles.input}
          placeholder="Shared Space Type"
          onChangeText={(text) => setSharedSpaceType(text)}
          value={sharedSpaceType}
        />
        <TextInput
          style={styles.input}
          placeholder="Number of People"
          onChangeText={(text) => setNumberOfPeople(text)}
          value={numberOfPeople}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Rent Price"
          onChangeText={(text) => setRentPrice(text)}
          value={rentPrice}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Utilities Cost"
          onChangeText={(text) => setUtilitiesCost(text)}
          value={utilitiesCost}
        />
        <TextInput
          style={styles.input}
          placeholder="Pets Allowed"
          onChangeText={(text) => setPetsAllowed(text)}
          value={petsAllowed}
        />
        <TextInput
          style={styles.input}
          placeholder="Transport Fees"
          onChangeText={(text) => setTransportFees(text)}
          value={nearestPublicTransport}
        />
        <TextInput
          style={styles.input}
          placeholder="Grocery Budget"
          onChangeText={(text) => setGroceryBudget(text)}
          value={groceryStoresNearby}
        />
        <TextInput
          style={styles.input}
          placeholder="Restrictions"
          onChangeText={(text) => setRestrictions(text)}
          value={nearestHealthcareFacility}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#FCD7DC',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 20,
  },
  form: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    paddingHorizontal: 80,
    paddingVertical: 5,
    marginBottom: 15,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fc798d',
    fontWeight: 'bold',
  },
});

export default HouseholdForm;
