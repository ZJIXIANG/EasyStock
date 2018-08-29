import React,{Component} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import {toDeviceSize, width} from '../utils/sizeTransform'

export default class CommonColumnImg extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {data} = this.props
        return(
            <View style={styles.container}>
                <Image style={styles.leftPartForImg} source={require('../images/choicecoupon.png')}/>
                <View style={styles.middlePart}>
                    <Text style={styles.middlePartTop}>{data.title}</Text>
                    <Text style={styles.middlePartBottom}>{data.info}</Text>
                </View>
                <Text style={styles.rightPartNum}>{data.count}</Text>
                <Image style={styles.rightPartMore} source={require('../images/items_更多icon.png')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width,
        height:toDeviceSize(171),
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:2,
        borderBottomColor:'#E6E6E6',
    },
    leftPartForImg:{
        width:toDeviceSize(140),
        height:toDeviceSize(130),
        marginLeft:toDeviceSize(30),
        borderRadius:10,
        backgroundColor:'#00ADED'
    },
    middlePart:{
        width:toDeviceSize(410),
        height:toDeviceSize(84),
        alignItems:"flex-start",
        justifyContent:"space-between",
        marginLeft:toDeviceSize(26),
        // borderColor:'red',
        // borderStyle:'solid',
        // borderWidth:1,
    },
    middlePartTop:{
        // fontFamily: 'SFProDisplay-Medium',
        fontSize: toDeviceSize(28),
        color: '#464646',
        letterSpacing: 0,
    },
    middlePartBottom:{
        // fontFamily: 'SFProDisplay-Regular',
        fontSize: toDeviceSize(26),
        color: '#969CA1',
        letterSpacing: 0,
    },
    rightPartMore:{
        position:'absolute',
        left:toDeviceSize(696)
    },
    rightPartNum:{
        width:toDeviceSize(65),
        height:toDeviceSize(34),
        // fontFamily: 'SFProDisplay-Regular',
        fontSize: toDeviceSize(28),
        color: '#969CA1',
        letterSpacing: 0,
        textAlign:'right',
        position:'absolute',
        right:toDeviceSize(69),
    },

})