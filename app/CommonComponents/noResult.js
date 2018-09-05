import React,{Component} from 'react'
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity, FlatList, Dimensions} from 'react-native'
import {toDeviceSize} from '../utils/sizeTransform'

const titleheight = toDeviceSize(128)
const noSearchHeight = Dimensions.get("window").height - titleheight

export default class NoResultComponent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
           <View style={styles.noResultContainer}>
               <Image source={require('../images/search_无结果icon.png')} style={styles.noResultImg}/>
               <Text style={styles.noSearchtInfo}>Add a {this.props.text}</Text>
           </View> 
        )
    }
}

const styles = StyleSheet.create({
    noResultContainer:{
        width:toDeviceSize(750),
        height:noSearchHeight,
        backgroundColor:'#F5F7F7',
        alignItems:'center',
        paddingTop:toDeviceSize(346),
    },
    noResultImg:{
        width:toDeviceSize(140),
        height:toDeviceSize(120)
    },
    noSearchtInfo:{
         // fontFamily: 'SFProText-Regular'
         fontSize : toDeviceSize(32),
         color : '#969CA1',
         textAlign :'center',
         lineHeight: toDeviceSize(32),
         marginTop:toDeviceSize(30)
    }
    
    
})