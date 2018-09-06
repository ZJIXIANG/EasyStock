import React, { Component } from 'react'
import {View, Text, StyleSheet, Image, FlatList, Dimensions, TouchableOpacity} from 'react-native'
import {toDeviceSize} from '../../../utils/sizeTransform'
import {editGroupList,currencyList} from '../../../data.json'
import {createStackNavigator} from 'react-navigation'
import TextEditing from '../../../CommonComponents/textEditing'
import {SearchGroup, } from './categories'
import {sortListForGroup} from '../../../data.json'
import {supplierData} from '../../../data.json'
import SupplierEdite from './supplierEdite'


const titleheight = toDeviceSize(128)
const noSearchHeight = Dimensions.get("window").height - titleheight


export class HeaderColumn extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {navigation} =this.props
        return(
            <View style={styles.HeaderColumnContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../images/nav_返回icon.png')} style={styles.leftImg}></Image>
                </TouchableOpacity>
                <Text style={styles.HeaderTextMidd}>{navigation.getParam('title')}</Text>
                <TouchableOpacity style={styles.rightImg} onPress={() => navigation.navigate('SupplierEdite',{title:'Supplier'})}>
                    <Image source={require('../../../images/nav_添加icon.png')} style={styles.rightImg}></Image>
                </TouchableOpacity>
            </View>
        )
    }
}

class SupplierList extends Component{
    static navigationOptions = {
        header:null
    }
    constructor(props){
        super(props)
    }

    _renderItem(item){
        return(
            <View>
                <View style={styles.container}>
                    <Text style={styles.groups}>{item.item.group}</Text>
                    <Text style={styles.prince}>{item.item.prince} items</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SupplierEdit')}>
                        <Image source={require('../../../images/items_更多icon.png')} style={styles.img}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    render(){
        const {data} = this.props 
        return(
            <FlatList
                data = {data}
                renderItem ={(item) => this._renderItem(item)}
                keyExtractor ={(item,index) => index}
            >

            </FlatList>
        )
    }
}


class Supplier extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {navigation} = this.props
        return(
            <View style={styles.bgColor}>
                <HeaderColumn navigation={navigation}/>
                <SearchGroup/>
                <SupplierList navigation={navigation} data={supplierData}/>
            </View>
        )
    }
}

const SupplierStack = createStackNavigator(
    {
        Supplier,
        SupplierEdite,
    },
    {
        navigationOptions:{
            header:null
        }
    }
)

export default SupplierStack


const styles = StyleSheet.create({
    bgColor:{
        width:toDeviceSize(750),
        height:noSearchHeight,
        backgroundColor:'white'
    },
    container:{
        width:toDeviceSize(750),
        height:toDeviceSize(100),
        paddingHorizontal:toDeviceSize(30),
        paddingVertical:toDeviceSize(33),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:toDeviceSize(1),
        borderColor:'#E6E6E6',
        borderStyle:'solid'
    },
    groups:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(28),
        color : '#464646',
        textAlign :'left',
        lineHeight: toDeviceSize(34),
    },
    prince:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(28),
        color : '#464646',
        textAlign :'right',
        lineHeight: toDeviceSize(34),
        position:'absolute',
        right:toDeviceSize(69),
    },
    img:{
        width:toDeviceSize(24),
        height:toDeviceSize(24),
    },
    HeaderColumnContainer:{
        width : toDeviceSize(750),
        height : toDeviceSize(128),
        paddingTop : toDeviceSize(63),
        paddingLeft : toDeviceSize(30),
        paddingRight : toDeviceSize(30),
        paddingBottom : toDeviceSize(22),
        flexDirection : 'row',
        justifyContent : 'space-between' ,
        backgroundColor : '#00ADED',
        alignItems:'center',       
    },
    HeaderTextMidd:{
        // fontFamily: 'SFProText-Semibold'
        fontSize : toDeviceSize(36),
        color : '#FFFFFF',
        textAlign :'center',
        lineHeight: toDeviceSize(36),
    },
})