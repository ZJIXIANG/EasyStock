import React, {Component} from 'react';
import {View, Text, } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

export default class Overview extends Component{
    render(){
        return(
            <View style={{flex:1, justifyContent:"center", alignItems:'center'}}>
                <Text>Overview</Text>
            </View>
        )
    }
} 