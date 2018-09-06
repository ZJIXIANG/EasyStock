import React,{Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, Modal, TouchableOpacity} from 'react-native'
import {createStackNavigator} from 'react-navigation'
import {toDeviceSize} from '../../../utils/sizeTransform.js'


const titleheight = toDeviceSize(128)
const noSearchHeight = Dimensions.get("window").height - titleheight

class HeaderColumn extends Component{
    render(){
        return(
            <View style={styles.headerContainer}>
                <Image source={require('../../../images/nav_返回icon.png')} style={styles.back}/>
                <View style={styles.inner}>
                    <Text style={styles.title}>Slideshow</Text>
                    <Text style={styles.nums}>1/12</Text>
                </View>
            </View>
        )
    }
}

export default  class Slideshow extends Component{
    render(){
        return(
            <View>
                <HeaderColumn/>
                <View style={styles.bgColor}>
                    <Image style={styles.showImg} source={require('../../../images/photo/e.png')}/>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>15 Foot USB2-A/B cable</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    headerContainer:{
        width:toDeviceSize(750),
        height:toDeviceSize(128),
        backgroundColor:'#00ADED',
        paddingLeft:toDeviceSize(30),
        flexDirection:'row',
    },
    back:{
        width:toDeviceSize(16),
        height:toDeviceSize(32),
        marginTop:toDeviceSize(68)
    },
    inner:{
        width:toDeviceSize(181),
        height:toDeviceSize(70),
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:toDeviceSize(52),
        marginLeft:toDeviceSize(237)
    },
    title:{
        // fontFamily: 'SFProText-Semibold'
        fontSize : toDeviceSize(36),
        color : '#FFFFFF',
        letterSpacing : 0,
        textAlign :'center',
        lineHeight:toDeviceSize(36),
    },
    nums:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(22),
        color : '#FFFFFF',
        letterSpacing : 0,
        textAlign :'center',
        opacity : 0.9,
    },
    bgColor:{
        width:toDeviceSize(750),
        height:noSearchHeight,
        backgroundColor:'black',
    },
    showImg:{
        width:toDeviceSize(750),
        height:toDeviceSize(750),
        marginTop:toDeviceSize(164),
    },
    footer:{
        width:toDeviceSize(750),
        height:toDeviceSize(98),
        backgroundColor:'white',
        opacity:0.25,
        position:'absolute',
        bottom:0,
        paddingLeft:toDeviceSize(30),
        paddingVertical:toDeviceSize(31),
    },
    footerText:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(30),
        color : '#FFFFFF',
        letterSpacing : 0,
        textAlign :'right',
        lineHeight:toDeviceSize(36)
    }
})