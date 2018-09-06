import React, { Component } from 'react'
import {View, TextInput, StyleSheet, Image, SectionList, Dimensions, TouchableOpacity} from 'react-native'
import {toDeviceSize} from '../../../utils/sizeTransform'
import {editGroupList,currencyList} from '../../../data.json'
import {createStackNavigator} from 'react-navigation'
import { SearchGroup, } from './categories'
import {groupSupplierData} from '../../../data.json'
import TextEditing from '../../../CommonComponents/textEditing'
import {HeaderColumn} from '../../../CommonComponents/textEditing'


export default class Contact extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {navigation} = this.props
        return(
            <View>
                <HeaderColumn navigation={navigation}/>
                <View style={styles.inputContainer}>
                    <Image source={require('../../../images/contact_name_icon.png')}/>
                    <TextInput
                       style={styles.context}

                    ></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Image source={require('../../../images/contact_phone_icon.png')}/>
                    <TextInput
                       style={styles.context}
                    ></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Image source={require('../../../images/contact_email_icon.png')}/>
                    <TextInput
                       style={styles.context}
                    ></TextInput>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    inputContainer:{
        width:toDeviceSize(750),
        height:toDeviceSize(101),
        backgroundColor:'white',
        paddingLeft:toDeviceSize(30),
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor:'#E6E6E6',
        borderBottomWidth:toDeviceSize(1),
        borderStyle:'solid'
    },
    context:{
        position:'relative',
        left:toDeviceSize(27),
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(28),
        color : '#464646',
        textAlign :'left',
        lineHeight:toDeviceSize(34),
        letterSpacing:0,
    }
})
