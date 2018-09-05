import React,{Component} from 'react'
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native'
import {toDeviceSize} from '../utils/sizeTransform'
import {HeaderColumn} from './textEditing'


export default class BigText extends Component{
    static navigationOptions = {
        header:null
    }
    constructor(props){
        super(props)
        this.state={
            editing:false,
        }
    }

    isEditing(){
        this.setState({
            editing:true,
        })
    }

    deleteEdite(){
        this.refs.editInput.clear()
    }

    changeText(text){
        this.setState({
            editText:text
        })
    }

    render(){
        const {navigation} = this.props
        return(
            <View>
                <HeaderColumn navigation={navigation}></HeaderColumn>
                {/* 大型文本框 */}
                <View style={styles.bigInputContainer}>
                    <TextInput 
                        ref = 'editInput'
                        style={styles.bigTextInput} 
                        underlineColorAndroid="transparent"
                        onFocus={() => this.isEditing()}
                        onChangeText={(text) => this.changeText(text)}
                        value = {this.state.editText}
                        multiline ={true}
                    >
                    </TextInput>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bigInputContainer:{
        width:toDeviceSize(750),
        height:toDeviceSize(452),
        backgroundColor:'#FFFFFF',
        borderBottomColor:'#E6E6E6',
        borderBottomWidth:toDeviceSize(1),
        paddingHorizontal:toDeviceSize(30),
        paddingVertical:toDeviceSize(30),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    bigTextInput:{
        padding:0,
        width:toDeviceSize(690),
        height:toDeviceSize(390),
        // fontFamily: 'SFProDisplay-Regular',
        fontSize: toDeviceSize(28),
        color: '#464646',
        letterSpacing: 0,
    },
    
})