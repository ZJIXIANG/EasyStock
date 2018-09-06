import React,{Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, Modal, TouchableOpacity} from 'react-native'
import {createStackNavigator} from 'react-navigation'
import {toDeviceSize} from '../../../utils/sizeTransform.js'


export default  class HeaderCoulumn extends Component{
    constructor (props){
        super(props)
    }
    render(){
        return(
            <View style={styles.headerContainer}>
                <Image style={styles.back} source={require('../../../images/nav_返回icon.png')}/>
                <Text style={styles.title}></Text>
                <View style={styles.right}></View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    headerContainer:{
        width:toDeviceSize(750),
        height:toDeviceSize(128),
        backgroundColor:'#00ADED',
        paddingHorizontal:toDeviceSize(30),
        paddingTop:toDeviceSize(63),
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom:toDeviceSize(22),
        alignItems:'center'
    },
    back:{
        width:toDeviceSize(16),
        height:toDeviceSize(32)
    },
    title:{
         // fontFamily: 'SFProText-Semibold',
         fontSize: toDeviceSize(36),
         color: '#FFFFFF',
         letterSpacing: 0,
         textAlign: 'right',
    },
    right:{
        width:toDeviceSize(16),
        height:toDeviceSize(32)
    },
})