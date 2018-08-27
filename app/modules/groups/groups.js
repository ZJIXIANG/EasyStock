import React, {Component} from 'react';
import {View, Text, } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {GroupsItems} from './components/groupsItems.js'
import {GroupsList, AddGroups} from './components/groupslist.js'
import {GroupsInfo} from './components/groupsInfo.js'


//创建路由
class SearchGroup extends Component{
    render(){
        return(
            <View>
                <Text>搜索组</Text>
            </View>
        )
    }
}


class GroupsRoot extends Component{
    static navigationOptions={
        title:'Groups'
    }

    render(){
        return(
            <View style={{flex:1, justifyContent:"center", alignItems:'center'}}>
                <GroupsItems navigation={this.props.navigation}></GroupsItems>
            </View>
        )
    }
} 

const GroupsStack = createStackNavigator(
    {
        GroupsRoot,
        SearchGroup,
        GroupsList,
        GroupsInfo,
        AddGroups,
    }
)

export default class Groups extends Component{
    render(){
        return <GroupsStack></GroupsStack>
    }
}