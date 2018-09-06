import React,{Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, Modal, TouchableOpacity} from 'react-native'
import {createStackNavigator} from 'react-navigation'
import {toDeviceSize} from '../../../utils/sizeTransform.js'

export default class TextColumn extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {data} = this.props
        return(
            <View style={styles.container}>
                <Text style={styles.leftText}> {data.title} </Text>
                <Text style={styles.rightText}> {data.value} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width:toDeviceSize(750),
        height:toDeviceSize(101),
        backgroundColor:'white',
        paddingHorizontal:toDeviceSize(30),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomColor:'#E6E6E6',
        borderBottomWidth:toDeviceSize(1),
        borderStyle:"solid"
    },
    leftText:{
        // fontFamily: 'SFProText-Regular',
        fontSize: toDeviceSize(28),
        color: '#969CA1',
        letterSpacing: 0,
        textAlign: 'left',
    },
    leftText:{
        // fontFamily: 'SFProText-Regular',
        fontSize: toDeviceSize(28),
        color: '#464646',
        letterSpacing: 0,
        textAlign: 'right',
    },
})