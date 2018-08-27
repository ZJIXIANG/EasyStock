import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'

export default class CommonColumnImg extends Component{
    render(){
        return(
            <View style={styles.commonColumnImg}>
            {/* <View style={{borderColor:'red',borderWidth:1}}> */}
                <Text>带图片的通用行组件</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    commonColumnImg:{
        width:375,
        height:50,
        backgroundColor:'white',
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        borderColor:'red',
        borderWidth:1
    }
})