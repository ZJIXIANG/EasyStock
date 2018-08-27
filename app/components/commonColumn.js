import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'

const {width} = Dimensions.get('window')

class CommonColumn extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Name</Text>
                <Text>cable</Text>
                <Text>></Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'white',
        width,
        height:40,
        justifyContent:'space-between',
        alignItems:"center",
    }
}) 

export default CommonColumn