import React,{Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Barcode from 'react-native-vector-icons/MaterialCommunityIcons'
import Search from 'react-native-vector-icons/Feather'

import {createStore} from 'redux'
import reducer from '../../../stateManager/reducers/grouping.js'
import {change} from '../../../stateManager/actions/index.js'

const store = createStore(reducer)
store.subscribe(() => console.log('State updated!', store.getState()) )


export class HeaderTopColumn extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={styles.headerContent}>
                <Barcode name='barcode-scan' size={25} color='white' onPress={() => navigate('ScanCode')}/>
                <Text style={{fontSize:25,color:'white'}}>Items</Text>
                <Search name='plus' size={25} color='white' onPress={() => navigate('AddItem')}/>
                <Search name='search' size={25} color='white' onPress={() => navigate('SearchItem')}/>
            </View>
        )
    }
}


export class HeaderBottomColumn extends Component{

    render(){
        return(
            <View style={{position:"absolute",width:375,height:30,top:50}}>
                <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                    <Text>Groups</Text>
                    <Text>Amount</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                    <Text onPress={() => store.dispatch(change())}>Samples</Text>
                    <Text>3</Text>
                </View>
                
            </View>
        )
    }
}


const styles = StyleSheet.create({
    headerContent:{
        width:375,
        height:40,
        flexDirection:'row',
        justifyContent:"space-between", 
        alignItems:'center',
        borderStyle:'solid',
        borderColor:'red',
        borderWidth:1,
        backgroundColor:'blue',
        position:'absolute',
    }
})