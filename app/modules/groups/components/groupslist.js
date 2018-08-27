import React,{Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'



export class AddGroups extends Component{
    render(){
        return(
            <View>
                <Text>添加Groups</Text>
            </View>
        )
    }
}

export class GroupsList extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{width:375,height:200,backgroundColor:'yellow'}}>
                <Text onPress={() => navigate('GroupsInfo')}>组列表</Text>
                <Text>组列表</Text>
                <Text>组列表</Text>
                <Text>组列表</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    groupsList:{
        width:375,
    }
})