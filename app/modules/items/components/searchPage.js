import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, FlatList} from 'react-native';
import {toDeviceSize, width, HEIGHT} from '../../../utils/sizeTransform'

const titleheight = toDeviceSize(128)
const noSearchHeight = Dimensions.get("window").height - titleheight

class hasSearchComponent extends Component{
    render(){
        return(
            <FlatList
                
            >

            </FlatList>
        )
    }
}

class NoSearchComponent extends Component{
    render(){
        return(
           <View style={styles.noSearchContainer}>
               <Image source={require('../../../images/search_无搜索记录icon.png')} style={styles.noSearchImg}/>
               <Text style={styles.noSearchInfo}>No recent search records</Text>
           </View> 
        )
    }
}

class TitleBar extends Component{
    constructor(props){
        super(props)
        this.state={
            searching:false,
            searchHistory:false,
        }
    }

    isSearching(){
        this.setState({
            searching:true,
        })
    }

    deleteSearch(){
        this.refs.deleteSearch.clear()
    }

    changeText(text){
        this.setState({
            searchText:text
        })
    }
    render(){
        const {goBack} = this.props.navigation
        const deleteSearch = this.state.searching ? (
            <TouchableOpacity style={styles.delete} onPress={() => this.deleteSearch()}>
                <Image source={require('../../../images/search_搜索框内删除icon.png')}/>
            </TouchableOpacity> 
        ) : null;
        return(
            <View style={styles.headerContainer}>
                <View style={styles.titleColumn}>
                    <View style={styles.searchItem}>
                        <Image style={styles.searchIcon} source={require('../../../images/search_icon.png')}/>
                        <TextInput 
                            ref = 'deleteSearch'
                            style={styles.inputText} 
                            placeholder='Search' 
                            placeholderTextColor='#D7DADB' 
                            onFocus={() => this.isSearching()}
                            onChangeText={(text) => this.changeText(text)}
                            value = {this.state.searchText}
                            >
                        </TextInput>
                        {deleteSearch}
                    </View>
                    <TouchableOpacity activeOpacity={1} onPress={() => goBack()}>
                        <Text style={styles.back}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default class SearchItem extends Component{
    static navigationOptions = {
        header:null
    }
    constructor(){
        super()
        this.state={
            searchHistory:false
        }
    }
    render(){
        const noSearch = this.state.searchHistory ? <Text>有搜索记录</Text>:<NoSearchComponent/>
        return(
            <View>
                <TitleBar navigation={this.props.navigation}></TitleBar>
                {noSearch}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer:{
        width:toDeviceSize(750),
        height:toDeviceSize(128),
        backgroundColor:'#00ADED'
    },
    titleColumn:{
        width:toDeviceSize(750),
        height:toDeviceSize(56),
        marginTop:toDeviceSize(56),
        flexDirection:'row',
        alignItems:'center',
    },
    searchItem:{
        width:toDeviceSize(560),
        height:toDeviceSize(56),
        backgroundColor:'#FFFFFF',
        marginLeft:toDeviceSize(30),
        borderRadius:toDeviceSize(12),
        flexDirection:'row',
        alignItems:'center',        
    },
    searchIcon:{
        marginLeft:toDeviceSize(20)
    },
    inputText:{
        width:toDeviceSize(400),
        height:toDeviceSize(56),
        marginLeft:toDeviceSize(20),
        // borderColor:'red',
        // borderWidth:1,
        // borderStyle:'solid',
        // fontFamily: 'SFProText-Regular',
        fontSize: toDeviceSize(28),
        color: '#464646',
        letterSpacing: 0,
    },
    delete:{
        position:'absolute',
        right :toDeviceSize(20)
    },
    back:{
        // fontFamily: 'SFProText-Regular',
        fontSize: toDeviceSize(34),
        color: '#FFFFFF',
        letterSpacing: 0,
        textAlign: 'right',
        marginLeft:toDeviceSize(20)
    },
    noSearchContainer:{
        width:toDeviceSize(750),
        height:noSearchHeight,
        backgroundColor:'#F5F7F7',
        alignItems:'center',
        paddingTop:toDeviceSize(330),
    },
    noSearchImg:{
        width:toDeviceSize(152),
        height:toDeviceSize(136),
    },
    noSearchInfo:{
        width:toDeviceSize(370),
        height:toDeviceSize(38),
        // fontFamily: 'SFProText-Regular',
        fontSize: toDeviceSize(32),
        color: '#969CA1',
        letterSpacing: 0,
        textAlign: 'center',
        marginTop:toDeviceSize(30)
    }

})