import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {UserContext} from '../context/UserContext';
import Loader from '../components/Loader';

const UserListScreen = ({navigation}) => {
  // context'e abone olmak için useContext hook'u kullanılır.
  const {loading, error, users} = useContext(UserContext);
  return (
    <View style={{flex: 1}}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Text>Error</Text>
      ) : (
        <FlatList
          data={users}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('UserDetails', {userId: item.id})
                }>
                <View style={styles.item}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.subTitle}>{item.email}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};

export default UserListScreen;

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});
