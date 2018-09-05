import React, { Component } from 'react'
import {View, Text, StyleSheet, Image, SectionList, TouchableOpacity} from 'react-native'
import {toDeviceSize} from '../../../utils/sizeTransform'
import {editGroupList,currencyList} from '../../../data.json'
import {createStackNavigator} from 'react-navigation'
import TextEditing from '../../../CommonComponents/textEditing'

export class HeaderColumn extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {navigation} = this.props
        const title = navigation.getParam('title')
        console.log(title)
        return(
            <View style={styles.HeaderColumnContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../images/nav_返回icon.png')} style={styles.leftImg}></Image>
                </TouchableOpacity>
                <Text style={styles.HeaderTextMidd}>{title}</Text>
                <View style={styles.rightBlock}></View>
            </View>
        )
    }
}


class CurrencyItem extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {item} = this.props
        const currencyChose = (<Image source={require('../../../images/Category_选择icon.png')} style={styles.hasChose}/>)
        return(
            <View style={styles.listContainer}>
                <Text style={styles.currencyCountry}>{item.currencyCountry}</Text>
                <View style={styles.listInner}>
                    <Text style={styles.currencyName}>{item.currencyName}</Text>
                    {currencyChose}
                </View>
            </View>
        )
    }
}

export default class Currency extends Component {
    render() {
        const {navigation} = this.props
        return (
            <View>
                <HeaderColumn navigation={navigation}/>
                { currencyList.map( (item, idex ) => <CurrencyItem item={item}/>) }
            </View>
        )
    }
}


const styles = StyleSheet.create({
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
        textAlign :'left',
        lineHeight: toDeviceSize(36),
    },
    rightBlock:{
        width:toDeviceSize(30),
        height:toDeviceSize(30),
    },
    listContainer:{
        width:toDeviceSize(750),
        height:toDeviceSize(101),
        backgroundColor:'white',
        flexDirection:'row',
        paddingHorizontal:toDeviceSize(30),
        paddingTop:toDeviceSize(36),
        paddingBottom:toDeviceSize(30),
        justifyContent:'space-between',
        borderBottomColor:'#E6E6E6',
        borderBottomWidth:toDeviceSize(1),
        borderStyle:'solid'
    },
    currencyCountry:{
        // fontFamily: 'SFProDisplay-Regular',
        fontSize: toDeviceSize(28),
        color: '#464646',
        letterSpacing: 0,
        lineHeight:toDeviceSize(34),
        textAlign:'left',
    },
    listInner:{
        flexDirection:'row',
        alignItems:'center'
    },
    currencyName:{
        // fontFamily: 'SFProDisplay-Regular',
        fontSize: toDeviceSize(28),
        color: '#969CA1',
        letterSpacing: 0,
        lineHeight:toDeviceSize(34),
        textAlign:'right',
    },
    hasChose:{
        marginLeft:toDeviceSize(24)
    }

})