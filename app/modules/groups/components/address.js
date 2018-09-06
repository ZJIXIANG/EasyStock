import React, { Component } from 'react'
import {View, TextInput, StyleSheet, Image, Text, Dimensions, TouchableOpacity} from 'react-native'
import {toDeviceSize} from '../../../utils/sizeTransform'
import {addressListData} from '../../../data.json'
import {createStackNavigator} from 'react-navigation'
import { SearchGroup, } from './categories'
import {groupSupplierData} from '../../../data.json'
import TextEditing from '../../../CommonComponents/textEditing'
import {HeaderColumn} from '../../../CommonComponents/textEditing'

class AddressEditeList extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {data} = this.props
        return(
            <View style={styles.container}>
                <TextInput
                    placeholder={data.title}
                    placeholderTextColor='#D7DADB'
                    style={styles.textBgColor}
                >

                </TextInput>
            </View>
        )
    }
}


export default  class Address extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {navigation} = this.props 
        return(
            <View>
                <HeaderColumn navigation={navigation}/>
                <View style={styles.container}>
                    <Text style={styles.textBgColor}>Country</Text>
                    <Image source={require('../../../images/items_更多icon.png')}/>
                </View>
                <View style={styles.segmentation}></View>
                {
                    
                    addressListData.map( (item,index) => <AddressEditeList data={item} key={index}/>)
                   
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width:toDeviceSize(750),
        height:toDeviceSize(101),
        backgroundColor:'#FFFFFF',
        borderBottomColor:'#E6E6E6',
        borderBottomWidth:toDeviceSize(1),
        paddingHorizontal:toDeviceSize(30),
        flexDirection:'row',
        alignItems:"center",
        backgroundColor:'white',
        justifyContent:'space-between'
    },
    textBgColor:{
        // fontFamily: 'SFProDisplay-Regular',
        fontSize: toDeviceSize(28),
        color: '#D7DADB',
        letterSpacing: 0,
        lineHeight:toDeviceSize(34),
        textAlign:'left',
    },
    segmentation:{
        width:toDeviceSize(750),
        height:toDeviceSize(20),
    },


})