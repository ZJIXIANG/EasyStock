import React, {Component} from 'react';
import {View, Text, } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {HeaderBottomColumn} from '../items/components/headerColumn.js'
import {PageBody} from './components/PageBody.js'


class OverviewRoot extends Component{
    render(){
        return(
            <View>
                <HeaderBottomColumn></HeaderBottomColumn>
                <PageBody></PageBody>
            </View>
        )
    }
}

const OverviewStack = createStackNavigator(
    {
        OverviewRoot,
    },
    {
        navigationOptions:{
            // header:null
        }
    }
)

export default class Overview extends Component{
    render(){
        return(
            <OverviewStack></OverviewStack>
        )
    }
} 

