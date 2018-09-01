import React,{Component} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, SectionList, Dimensions, FlatList} from 'react-native'
import {toDeviceSize} from '../utils/sizeTransform'
import {imageList} from '../data.json'
import NoImgColumnForItm from './noImgColumnForItm'
import NoResultComponent from './noResult'

class ImgList extends Component{
    constructor(props){
        super(props)
    }

    flatRender(item){
        // console.log(item)
        return(
            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                <Image source={require('../images/photo/c.jpg')} style={{width:100,height:100}}></Image>
            </View>
        )
    }

    _renderItem(info){
        const data = info.item
        console.log(data)
        return(
            <View style={{flexDirection:'row',flexWrap:'wrap',width:375,height:700}}>

                <FlatList
                        horizontal={true}
                        data={data}
                        renderItem={(item) => this.flatRender(item)}
                >

                </FlatList>
           </View>
        )
    }

    _renderSection(info){
        return(
            <Text>12334</Text>
        )
    }

    render(){
        return(
            <SectionList
                sections={imageList}
                renderItem = {(info) => this._renderItem(info)}
                // renderSectionHeader = {(info) => this._renderSection(info)}
                // ListFooterComponent = {() => this._footComponent()}
                // ItemSeparatorComponent = {() => <View style={{backgroundColor:'black',width:375,height:1}}></View>}
                keyExtractor = {(item,index) => index}
                showsHorizontalScrollIndicator ={false}
            >

            </SectionList>
        )
    }
    

}


export class HeaderColumn extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {navigation} = this.props
        return(
            <View style={styles.HeaderColumnContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../images/nav_返回icon.png')} style={styles.leftImg}></Image>
                </TouchableOpacity>
                <Text style={styles.HeaderTextMidd}>{navigation.getParam('title')}</Text>
                <TouchableOpacity>
                    <Image source={require('../images/nav_拍摄icon.png')} style={styles.rightImg}></Image>
                </TouchableOpacity>
            </View>
        )
    }
}

export default class ImageListEditing extends Component{
    static navigationOptions = {
        header:null
    }
    render(){
        const {navigation} =this.props
        return(
            <View>
                <HeaderColumn navigation={navigation}></HeaderColumn>
                <ImgList></ImgList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    HeaderColumnContainer:{
        width : toDeviceSize(750),
        height : toDeviceSize(128),
        paddingTop : toDeviceSize(63),
        paddingLeft : toDeviceSize(30),
        paddingRight : toDeviceSize(30),
        paddingBottom : toDeviceSize(22),
        flexDirection : 'row',
        justifyContent : 'space-between' ,
        backgroundColor : '#00ADED',
        alignItems:'center',       
    },
    HeaderTextMidd:{
        // fontFamily: 'SFProText-Semibold'
        fontSize : toDeviceSize(36),
        color : '#FFFFFF',
        textAlign :'center',
        lineHeight: toDeviceSize(36),
    },
    itemSepara:{
        backgroundColor:"#E6E6E6",
        flex:1,
        height:toDeviceSize(1)
    }
    
})