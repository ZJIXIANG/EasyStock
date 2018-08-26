import React, {Component} from 'react';
import {View, Text, } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';




class GroupsRoot extends Component{
    static navigationOptions={
        title:'Groups'
    }

    render(){
        return(
            <View style={{flex:1, justifyContent:"center", alignItems:'center'}}>
                <Text>Groups</Text>
            </View>
        )
    }
} 

const GroupsStack = createStackNavigator(
    {
        GroupsRoot,
    }
)

export default class Groups extends Component{
    render(){
        return <GroupsStack></GroupsStack>
    }
}