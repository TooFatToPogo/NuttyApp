import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import Login from './Login';
import SaveButton from './SaveButton';


export default class DetailsScreen extends React.Component {

render() {
    const { onClickSave, onClickLogin, baseState, updateUsername, updatePassword, onClickLogout } = this.props.screenProps;
    const { totalKcal, totalProtein, totalFat, totalCarbs, isLoggedIn, loginMessage } = baseState;
   
    return (
      <View style={styles.container}>
      <Login loginMessage={loginMessage} updateUsername={updateUsername} updatePassword={updatePassword} isLoggedIn={isLoggedIn} onClickLogin={onClickLogin} onClickLogout={onClickLogout}></Login>
      <View>
      <Text>Kcal: {totalKcal}</Text>
      <Text>daily intake</Text>
      <Text>Protein: {Math.round(totalProtein)}</Text>
      <Text>Fat: {Math.round(totalFat)}</Text>
      <Text>Carbs: {Math.round(totalCarbs)}</Text>
      <SaveButton isLoggedIn={isLoggedIn} onClickSave={onClickSave}></SaveButton>
      </View>
    </View>  
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      backgroundColor: '#fefefe',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
  });