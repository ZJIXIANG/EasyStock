import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, FlatList} from 'react-native';
import {toDeviceSize, width, HEIGHT} from '../../../utils/sizeTransform'
import needData from '../../../data.json'
import HasImgColumnForItem from '../../../CommonComponents/hasImgColumnForItem'
import NoResultsComponent from '../../../CommonComponents/noResult'

const titleheight = toDeviceSize(128)
const noSearchHeight = Dimensions.get("window").height - titleheight
//搜索结果有关的组件
class SearchResult extends Component{
    render(){
        return(
            <FlatList
                    data = {needData.searchResut}
                    renderItem = {(item => this._renderItem(item))}
                    // keyExtractor={index => index}
                    ListEmptyComponent = {<NoResultsComponent text='No search results found'/>}
                >
                </FlatList>
        )
    }

    _renderItem(item){
        return (<HasImgColumnForItem data={item.item}></HasImgColumnForItem>)
    }
}

//搜索记录有关的组件
class RecentSearch extends Component{
    render(){
        return(
            <View style={styles.recentSearchContainer}>
                <Text style={styles.recentSearchText}>Recent searches</Text>
                <Image source={require('../../../images/search_删除icon.png')} style={styles.recentSearchImg}></Image>
            </View>
        )
    }
}

class HasSearchComponent extends Component{
    render(){
        return(
            <View style={styles.searchRecordBg}>
                <FlatList
                    data = {needData.recordArray}
                    renderItem = {(item => this._renderItem(item))}
                    keyExtractor={index => index}
                    ItemSeparatorComponent = {() => this._separetor()}
                    ListFooterComponent = {() => this._separetor()}
                    ListEmptyComponent = {<NoSearchComponent/>}
                >
                </FlatList>
            </View>
        )
    }
    _renderItem(item){
        return (
            <View style={styles.renderItemContainer}>
                <Text style={styles.renderItemText}>{item.item}</Text>
            </View>
        )
    }
    _separetor(){
        return(
            <View style={styles.separetor}>
            </View>
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


//标题栏
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
            <TouchableOpacity onPress={() => this.deleteSearch()}>
                <Image style={styles.delete} source={require('../../../images/search_搜索框内删除icon.png')}/>
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

//组件入口
export default class SearchItem extends Component{
    static navigationOptions = {
        header:null
    }
    constructor(){
        super()
        this.state={
        }
    }
    render(){
        const search = needData.recordArray.length == 0 ? null : <RecentSearch></RecentSearch> ;
        return(
            <View>
                <TitleBar navigation={this.props.navigation}></TitleBar>
                {search}
                <HasSearchComponent/>
                {/* <SearchResult></SearchResult> */}
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
    },
    recentSearchContainer:{
        width:toDeviceSize(720),
        height:toDeviceSize(76),
        marginLeft:toDeviceSize(30),
        paddingTop:toDeviceSize(32),
        paddingRight:toDeviceSize(30),
        paddingBottom:toDeviceSize(10),
        flexDirection:'row',
        justifyContent:'space-between'
    },
    recentSearchText:{
        height:toDeviceSize(34),
        // fontFamily: 'SFProText-Regular',
        fontSize: toDeviceSize(28),
        color: '#969CA1',
        letterSpacing: 0,
        textAlign: 'right',
    },
    recentSearchImg:{
        width:toDeviceSize(60),
        height:toDeviceSize(60),
        // backgroundColor: '#D7DADB',
        borderRadius: toDeviceSize(2),
    },
    renderItemContainer:{
        width:toDeviceSize(720),
        height:toDeviceSize(98),
        paddingTop:toDeviceSize(30),
        paddingBottom:toDeviceSize(30),
        marginLeft:toDeviceSize(30),
        backgroundColor:'white'
        // borderBottomColor:'black',
        // borderBottomWidth:toDeviceSize(5),
        // borderStyle:'solid',
        // borderColor:'red',
        // borderStyle:'solid',
        // borderWidth:1
    },
    renderItemText:{
        height:toDeviceSize(38),
        // fontFamily: 'SFProText-Regular',
        fontSize: toDeviceSize(32),
        color: '#464646',
        letterSpacing: 0,
        textAlign: 'left',
    },
    separetor:{
        width:toDeviceSize(720),
        height:toDeviceSize(1),
        backgroundColor:'#e6e6e6',
        marginLeft:toDeviceSize(30),
    },
    searchRecordBg:{
        width:toDeviceSize(750),
        height:noSearchHeight,
        backgroundColor:'white',
    },
    noSearchtInfo:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(32),
        color : '#969CA1',
        textAlign :'center',
        lineHeight: toDeviceSize(32),
        marginTop:toDeviceSize(30)
   }
})