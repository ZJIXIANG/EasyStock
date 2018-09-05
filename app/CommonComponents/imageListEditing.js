import React,{Component} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, SectionList, Dimensions, FlatList} from 'react-native'
import {toDeviceSize} from '../utils/sizeTransform'
import {imageList} from '../data.json'
import NoResult from '../CommonComponents/noResult'
import NoImgColumnForItm from './noImgColumnForItm'
import NoResultComponent from './noResult'

class ImgList extends Component{
    constructor(props){
        super(props)
    }

    flatRender(item){
        return(
            <View style={styles.flatImg}>
                <Image source={require('../images/photo/c.jpg')} style={{width:toDeviceSize(226),height:toDeviceSize(226)}}></Image>
            </View>
        )
    }

    _renderItem(info){
        const data = info.item
        return(
            <View style={{flexDirection:'row',flexWrap:'wrap',width:toDeviceSize(750)}}>

                <FlatList
                        horizontal={false}
                        data={data}
                        renderItem={(item) => this.flatRender(item)}
                        keyExtractor = {(item, index) => item.id}
                        numColumns ={3}
                >

                </FlatList>
           </View>
        )
    }

    _renderSection(info){
        return(
            <View style={styles.section}>
                <Text style={styles.sectionText}>{info.section.key}</Text>
            </View>
        )
    }

    render(){
        return(
            <SectionList
                sections={imageList}
                renderItem = {(info) => this._renderItem(info)}
                renderSectionHeader = {(info) => this._renderSection(info)}
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
        header:null,
    }
    render(){
        const {navigation} =this.props
        const imglist = imageList.length === 0 ? <NoResult text={navigation.getParam('title')}></NoResult> : <ImgList></ImgList>
        return(
            <View style={{width:toDeviceSize(750),height:toDeviceSize(3000),backgroundColor:'white'}}>
                <HeaderColumn navigation={navigation}></HeaderColumn>
                {imglist}
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
    },
    flatImg:{
        marginLeft:toDeviceSize(18),
        marginTop:toDeviceSize(18)
    },
    section:{
        paddingLeft:toDeviceSize(30),
        paddingTop:toDeviceSize(30),
        // fontFamily: 'SFProText-Medlum'
        fontSize : toDeviceSize(32),
        textAlign :'right',
        lineHeight: toDeviceSize(38),
        letterSpacing:0,

    },
    sectionText:{
             // fontFamily: 'SFProText-Medlum'
        fontSize : toDeviceSize(32),
        textAlign :'left',
        lineHeight: toDeviceSize(38),
        letterSpacing:0,
        color:'#969CA1',
    }
    
})