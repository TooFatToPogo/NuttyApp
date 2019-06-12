import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

export default class Login extends React.Component {

    render() {
        
        
        if(!this.props.isLoggedIn) {
            return <View>
                <TextInput placeholder="Username"></TextInput>
                <TextInput placeholder="Password"></TextInput>
                <Button onPress={this.props.onClickLogin} title="Login"></Button>
            </View>
        } else {
            return <View>
                <Button onPress={this.props.onClickLogout} title="Logout"></Button>
            </View>
        }
      
        }
    }
    