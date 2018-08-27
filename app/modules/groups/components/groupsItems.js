import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get("window")

export class GroupsItems extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={styles.groupsItem}>
                <Text onPress={() => navigate('GroupsList')}>groups</Text>
                <Text>categories</Text>
                <Text>storeage</Text>
                <Text>Suppliers</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    groupsItem:{
        width,
        height:300,
        backgroundColor:'blue'
    }
})