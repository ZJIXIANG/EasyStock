import React, {Component} from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import {createStackNavigator, } from 'react-navigation';
import {HeaderTopColumn, HeaderBottomColumn} from './components/headerColumn.js'
import {ShowGroups} from './components/pageBody.js'


//创建导航路由

class SearchItem extends Component{
    static navigationOptions = {
        title:'搜索'
    }
    render(){
        return(
            <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                <Text>搜索</Text>
            </View>
        )
    }
}

class AddItem extends Component{
    static navigationOptions = {
        title:'添加'
    }
    render(){
        return(
            <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                <Text>添加items</Text>
            </View>
        )
    }
}

class ScanCode extends Component{
    render(){
        return(
            <View>
                <Text>扫码</Text>
            </View>
        )
    }
}

class ItemRoot extends Component{
    static navigationOptions = {
        header:null
    }
    render(){
        return (
            <View style={{flex:1,width:375,marginTop:20}}>
                <Image style={{width:375, height:100, backgroundColor:'black'}} source={require('../../images/choicecoupon.png')}/>
                <HeaderTopColumn navigation={this.props.navigation}></HeaderTopColumn>
                <HeaderBottomColumn></HeaderBottomColumn>
                <ShowGroups></ShowGroups>
            </View>
        )   
    }
} 

const ItemStack = createStackNavigator(
    {
        ItemRoot,
        SearchItem,
        AddItem,
        ScanCode,
    },
    {
        initialRouteKey:'ItemRoot',
    }
)

export default class Items extends Component{
    render(){
        return <ItemStack/>
    }
}