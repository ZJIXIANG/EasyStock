import React, {Component} from 'react';
import {View, Text, } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';



class SettingRoot extends Component{
    render(){
        return(
            <View>
                <Text>123</Text>
            </View>
        )
    }
}

const SettingStack = createStackNavigator(
    {
        SettingRoot,
    },
    {
        navigationOptions:{
            // header:null
        }
    }
)

export default SettingStack

