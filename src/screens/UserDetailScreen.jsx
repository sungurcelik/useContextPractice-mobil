import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {useRoute} from '@react-navigation/native';
import {UserContext} from '../context/UserContext';

const UserDetailScreen = ({navigation}) => {
  const route = useRoute();

  const {userId} = route.params;
  // console.log(userId);
  const {users} = useContext(UserContext);

  const user = users.find(user => user.id === userId);
  // console.log(user)

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{user.name}</Text>
        <Text style={styles.info}>{user.email}</Text>
        <Text style={styles.info}>{user.phone}</Text>

        <Button
          title="View Tasks"
          onPress={() => navigation.navigate('Task', {userId})}
        />
      </View>
    </View>
  );
};

export default UserDetailScreen;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: '#fff'},
  card: {
    backgroundColor: '#eeedeb',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 15,
    marginBlock: 5,
  },
});
