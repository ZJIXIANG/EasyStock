import React, {Component} from 'react';
import {View, Text, Image, ScrollView, FlatList, Dimensions} from 'react-native';
import {createStackNavigator, } from 'react-navigation';
import {HeaderTopColumn, ItemCount, ItemInfo} from './components/headerColumn.js'
import {ShowGroups} from './components/pageBody.js'
import GroupModal from './components/groupModal.js'
import reducer from '../../stateManager/reducers/grouping.js'
import {toDeviceSize} from '../../utils/sizeTransform'
import CommonColumnImg from '../../CommonComponents/hasImgColumnForItem'


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
            <View style={{flex:1}}>
                <GroupModal></GroupModal>
                <Image style={{width:toDeviceSize(750), height:toDeviceSize(278)}} source={require('../../images/items_bg.png')}/>
                <HeaderTopColumn navigation={this.props.navigation}></HeaderTopColumn>
                <ItemCount></ItemCount>
                <ItemInfo></ItemInfo>
                <CommonColumnImg></CommonColumnImg>
                {/* <ShowGroups></ShowGroups> */}
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