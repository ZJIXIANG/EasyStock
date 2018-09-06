import React,{Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, Modal, TouchableOpacity} from 'react-native'
import {createStackNavigator} from 'react-navigation'
import {toDeviceSize} from '../../../utils/sizeTransform.js'
import HeaderCoulumn from './HeaderCoulumn'
import TextColumn from './textColumn'
import {statistics} from '../../../data.json'

export default class DoubleColumn extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.firstColumn}>
                    <Text style={styles.firstColumnLeft}>PC AX3960 Core i3，500GB</Text>
                    <Text style={styles.firstColumnRight}>+11</Text>
                </View>
                <View style={styles.secondColumn}>
                    <Text style={styles.secondColumnLeft}>6/28/2018,09:18 am</Text>
                    <View style={styles.secondColumnRightInner}>
                        <Text style={styles.secondColumnRight}>15</Text>
                        <Image style={styles.Img} source={require('../../../images/history_数量变化icon.png')}/>
                        <Text style={styles.secondColumnRight}>4</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width:toDeviceSize(750),
        height:toDeviceSize(131),
        backgroundColor:'white',
        paddingHorizontal:toDeviceSize(30),
        paddingVertical:toDeviceSize(26),
        alignItems:'center',
        borderBottomColor:'#E6E6E6',
        borderBottomWidth:toDeviceSize(1),
        borderStyle:"solid"
    },
    firstColumn:{
        height:toDeviceSize(40),
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    firstColumnLeft:{
        // fontFamily: 'SFProText-Regular',
        fontSize: toDeviceSize(28),
        color: '#464646',
        letterSpacing: 0,
        textAlign: 'left',
        lineHeight:toDeviceSize(40)
    },
    firstColumnRight:{
        // fontFamily: 'SFProText-Regular',
        fontSize: toDeviceSize(28),
        color: '#464646',
        letterSpacing: 0,
        textAlign: 'right',
        lineHeight:toDeviceSize(40)
    },
    secondColumn:{
        height:toDeviceSize(31),
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'  
    },
    secondColumnLeft:{
        // fontFamily: 'SFProText-Regular',
        fontSize: toDeviceSize(26),
        color: '#969CA1',
        letterSpacing: 0,
        textAlign: 'left',
        lineHeight:toDeviceSize(31)
    },
    secondColumnRight:{
        // fontFamily: 'SFProText-Regular',
        fontSize: toDeviceSize(26),
        color: '#969CA1',
        letterSpacing: 0,
        textAlign: 'right',
        lineHeight:toDeviceSize(31)
    },
    Img:{
        width:toDeviceSize(30),
        height:toDeviceSize(24),
        marginHorizontal:toDeviceSize(10),
    },
    secondColumnRightInner:{
        flexDirection:'row',
        alignItems:'center'
    }
})