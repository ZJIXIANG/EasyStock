import React,{Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, Modal, TouchableOpacity} from 'react-native'
import {toDeviceSize} from '../../../utils/sizeTransform.js'
import HeaderCoulumn from './HeaderCoulumn'
import DoubleColumn from './doubleColumn'


export default class History extends Component{
    render(){
        return(
            <View>
                <HeaderCoulumn/>
                <View style={styles.container}>
                    <Text style={styles.topText}></Text>
                    <Text style={styles.bottomText}></Text>
                </View>
                <View style={styles.segmentation}></View>
                <DoubleColumn/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width:toDeviceSize(750),
        height:toDeviceSize(150),
        backgroundColor:'white',
        justifyContent:'center',
    },
    topText:{
        // fontFamily: 'SFProText-Regular',
        fontSize: toDeviceSize(32),
        color: '#464646',
        letterSpacing: 0,
        textAlign: 'center',
        lineHeight:toDeviceSize(45)
    },
    bottomText:{
        // fontFamily: 'SFProText-Regular',
        fontSize: toDeviceSize(32),
        color: '#464646',
        letterSpacing: 0,
        textAlign: 'center',
        lineHeight:toDeviceSize(38),
        marginTop:toDeviceSize(18)
    }
})