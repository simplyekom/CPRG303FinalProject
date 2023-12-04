import React from 'react';
import { SafeAreaView, View, Button, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({ navigation }) => {
  return (
    <MainLayout>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.viewhousehold}>
          <Button
            title="View Household"
            onPress={() => navigation.navigate('View Household')}

          />
          </View>
          
          <View style={styles.createhousehold}>
          <Button
            title="Create Household"
            onPress={() => navigation.navigate('Create Household')}

          />
          </View>
          <View style = {styles.searchhousehold}>
          <Button
            title="Search Existing Household"
            onPress={() => navigation.navigate('Search Existing Household')}

          />
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
  });
  


export default HomeScreen;
