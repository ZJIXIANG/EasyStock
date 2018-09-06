import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import {toDeviceSize} from '../../utils/sizeTransform'
import {groupsItemData} from '../../image'
import GroupsList from '../groups/components/groupsList'
import Categories from './components/categories'
import Storages from './components/placeOfStorage'
import Supplier from './components/supplier'

class GroupTitle extends Component{
    render(){
        return(
            <View style={styles.headerContainer}>
                <View style={styles.headerLeft}></View>
                <Text style={styles.headerMidd}>Groups</Text>
                <Image source={require('../../images/nav_搜索icon.png')}/>
            </View>
        )
    }
}

export class ItemColumn extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {item, navigation} = this.props

        let direaction = ''
        if(item.info === 'Groups'){
            direaction = 'GroupsList'
        } else if(item.info === 'Place of storage' ){
            direaction = 'Categories'
        } else {
            direaction = item.info
        }
        return(
            <TouchableOpacity onPress={ () => navigation.navigate(direaction,{title:direaction})}>
                <View style={styles.ItemColumnContainer}>
                    <Image source={item.image}/>
                    <Text style={styles.itemInfo}>{item.info}</Text>
                    <Text style={styles.itemCount}>{item.count}</Text>
                    <Image source={require('../../images/items_更多icon.png')} style={styles.itemImg}  />
                </View>
            </TouchableOpacity>
        )
    }
}


class GroupsRoot extends Component{
    static navigationOptions={
        header:null
    }

    render(){
        const itemData = groupsItemData
        const total = itemData[0]
        const otherItem = itemData.slice(1)
        const {navigation} =this.props
        return(
            <View>
                <GroupTitle/>
                <ItemColumn item={total} key={total.id} navigation={navigation}/>
                <View style={styles.segmentation}></View>
                {
                    otherItem.map( (item,  index) => <ItemColumn item={item} key={item.id} navigation ={navigation}/> )
                }
            </View>
        )
    }
} 

const GroupsStack = createStackNavigator(
    {
        GroupsRoot,
        GroupsList,
        Categories,
        Storages,
        Supplier,
    },
    {
        initialRouteName:'GroupsRoot',
        navigationOptions:{
            header:null
        }
    }
)

export default GroupsStack

const styles = StyleSheet.create({
    headerContainer:{
        width:toDeviceSize(750),
        height:toDeviceSize(128),
        backgroundColor:'#00ADED',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:toDeviceSize(30),
        paddingTop:toDeviceSize(63),
        paddingBottom:toDeviceSize(22),
    },
    
    headerMidd:{
        // fontFamily: 'SFProText-Semibold'
        fontSize : toDeviceSize(36),
        color : '#FFFFFF',
        textAlign :'center',
        // letterSpacing:0,
        position:'absolute',
        right:toDeviceSize(310),
        top:toDeviceSize(63),
        lineHeight:toDeviceSize(43),
    },
    ItemColumnContainer:{
        width:toDeviceSize(750),
        height:toDeviceSize(101),
        paddingHorizontal:toDeviceSize(30),
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#FFFFFF',
        borderBottomColor:'#E6E6E6',
        borderStyle:'solid',
        borderBottomWidth:toDeviceSize(1),
        flexDirection:'row'
    },
    itemInfo:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(28),
        color : '#464646',
        textAlign :'left',
        letterSpacing:0,
        position:'absolute',
        left:toDeviceSize(99)
    },
    itemCount:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(28),
        color : '#969CA1',
        textAlign :'right',
        letterSpacing:0,
        position:'absolute',
        right:toDeviceSize(69)
    },
    segmentation:{
        width:toDeviceSize(750),
        height:toDeviceSize(20),
    },
    itemImg:{
        width:toDeviceSize(24),
        height:toDeviceSize(24)
    }

})