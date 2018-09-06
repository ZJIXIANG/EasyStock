import React,{Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, Modal, TouchableOpacity} from 'react-native'
import {createStackNavigator} from 'react-navigation'
import {toDeviceSize} from '../../../utils/sizeTransform.js'
import HeaderCoulumn from './HeaderCoulumn'
import TextColumn from './textColumn'
import {statistics} from '../../../data.json'



export default  class Statistics extends Component{
    render(){
        const secondSection = statistics.splice(1,7)
        const thirdSection = statistics.splice(7)
        return(
            <View>
                <HeaderCoulumn/>
                <TextColumn data={statistics[0]}/>
                <View style={styles.segmentation}></View>
                {
                    secondSection.map( (item,index) => <TextColumn data={item}/> )
                }
                <View style={styles.segmentation}></View>
                {
                    thirdSection.map( (item,index) => <TextColumn data={item}/>)
                }                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    segmentation:{
        width:toDeviceSize(750),
        height:toDeviceSize(20),
    }
})