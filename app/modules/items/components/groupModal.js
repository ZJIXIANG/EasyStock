import React, {Component} from 'react';
import {View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';


export default class GroupModal extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Modal 
                visible = {false}
                animationType = {'slide'}
                transparent = {true}
                onRequestClose = { () => {this._onRequestClose()}}
            >
                <TouchableOpacity style={{flex:1}} onPress={ () => {this._onClose()}}>
                    <View style={styles.container}>
                        <View style={{position:"absolute",width:80,height:50,marginTop:110,alignItems:"center",backgroundColor:'#fff'}}>
                            <Text>Group 1</Text>
                            <Text>Group 2</Text>
                            <Text>Group 3</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            </Modal>
        )
    }  
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.5)'
    },
    innerContainer:{
        position:"absolute",width:100,height:200,marginTop:300,alignItems:"center"
    }
})
