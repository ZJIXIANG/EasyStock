import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


export class PageBody extends Component{
    render(){
        return(
            <View>
                <Text>Slideshow</Text>
                <Text>Statistics</Text>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    pageBody:{
        width:375,
        height:200,
        marginTop:20,
    }
})