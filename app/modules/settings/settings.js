import React, {Component} from 'react';
import {View, Text, } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

class MoreInfo extends Component{
    render(){
        return(
            <View style={{flex:1, justifyContent:"center", alignItems:'center'}}>
                <Text>MoreInfo</Text>
            </View>
        )
    }
}

class SettingsRoot extends Component{
    render(){
        return(
            <View style={{flex:1, justifyContent:"center", alignItems:'center'}}>
                <Text onPress={() => this.props.navigation.navigate('MoreInfo')}>Settings</Text>
            </View>
        )
    }
}

const SettingsStack = createStackNavigator(
    {
        SettingsRoot,
        MoreInfo,
    }
) 

export default class Settings extends Component{
    render(){
        return(
           <SettingsStack></SettingsStack>
        )
    }
} 