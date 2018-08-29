import React,{Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {toDeviceSize} from '../../../utils/sizeTransform'


class HeaderColumn extends Component{
    render(){
        return(
            <View style={styles.HeaderColumnContainer}>
                <Text style={styles.HeaderTextLeft}>Cancel</Text>
                <Text style={styles.HeaderTextMidd}>New Item</Text>
                <Text style={styles.HeaderTextRight}>Done</Text>
            </View>
        )
    }
}

export default class AddItem extends Component{
    static navigationOptions = {
        header:null
    }
    render(){
        return(
            <View>
                <HeaderColumn></HeaderColumn>
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
        backgroundColor : '#00ADED'
    },
    HeaderTextLeft:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(34),
        color : '#FFFFFF',
        letterSpacing : 0,
        textAlign :'left',
    },
    HeaderTextMidd:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(36),
        color : '#FFFFFF',
        textAlign :'center',
    },
    HeaderTextRight:{
        // fontFamily: 'SFProText-Semibold'
        fontSize : toDeviceSize(34),
        color : '#FFFFFF',
        letterSpacing : 0,
        textAlign :'right',
        opacity : 0.6,
    }
})