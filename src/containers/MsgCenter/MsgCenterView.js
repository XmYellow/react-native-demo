import React, { PropTypes,Component } from 'react';
import { View,Slider,Image,TouchableHighlight } from 'react-native';

// Consts and Libs
import { AppStyles } from '@theme/';
import { Actions } from 'react-native-router-flux';
// Components
import { Text,Spacer, List, } from '@ui/';
import { ButtonGroup } from 'react-native-elements';

var data = [{id:1},{id:2},{id:3},{id:4}]

class MsgCenter extends Component {
    static componentName = 'MsgCenter';

    static propTypes = {
        value: PropTypes.number
    }

    constructor(props) {
        super(props);

        this.state = {
            value: 0.5
        };
        this.state = {
            selectedIndex: 1
        }
        this.updateIndex = this.updateIndex.bind(this)
    }
    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
    }
    getDetail () {
       console.info("==========")
    }
    modify = () => {
    }

    render = () => {
        const { selectedIndex } = this.state
        return (
            <View style={{paddingVertical:60,paddingHorizontal:10}}>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={["未查看","已查看"]}
                    TextStyle={{fontSize:11}}
                    containerStyle={{height: 30}} />
                <Spacer size={10}/>
                <TouchableHighlight onPress={Actions.msgdetail}
                                    underlayColor={'#fff'}>
                    <View style={[AppStyles.row]} >
                        <View style={[AppStyles.flex1]}>
                            <Image
                                source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493806221026&di=1d4d48839f5918b62e4bdf7347857519&imgtype=0&src=http%3A%2F%2Fringcdn.shoujiduoduo.com%2Fwallpaper%2Fdd%2Fthumb%2Ft_295654.jpg'}}
                                style={{height:40,width:40,borderRadius:20}}
                            />
                        </View>
                        <View style={[AppStyles.flex3]}>
                            <Text style={{fontSize:11}}>{"[告警]"}</Text>
                            <Text style={{fontSize:11,fontWeight:'400'}}>{"用户：未知位置：摄像头3"}</Text>
                        </View>
                        <View style={[AppStyles.flex1]}>
                            <Text style={{fontSize:11,fontWeight:'400'}}>{"5分钟前"}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                <Spacer size={10}/>
                <TouchableHighlight  onPress={Actions.msgdetail}
                                    underlayColor={'#fff'}>
                    <View style={[AppStyles.row]} >
                        <View style={[AppStyles.flex1]}>
                            <Image
                                source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493806221026&di=1d4d48839f5918b62e4bdf7347857519&imgtype=0&src=http%3A%2F%2Fringcdn.shoujiduoduo.com%2Fwallpaper%2Fdd%2Fthumb%2Ft_295654.jpg'}}
                                style={{height:40,width:40,borderRadius:20}}
                            />
                        </View>
                        <View style={[AppStyles.flex3]}>
                            <Text style={{fontSize:11}}>{"[告警]"}</Text>
                            <Text style={{fontSize:11,fontWeight:'400'}}>{"用户：未知位置：摄像头3"}</Text>
                        </View>
                        <View style={[AppStyles.flex1]}>
                            <Text style={{fontSize:11,fontWeight:'400'}}>{"5分钟前"}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                <Spacer size={10}/>
                <TouchableHighlight onPress={() => {this.getDetail() }}
                                    underlayColor={'#fff'}>
                    <View style={[AppStyles.row]} >
                        <View style={[AppStyles.flex1]}>
                            <Image
                                source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493806221026&di=1d4d48839f5918b62e4bdf7347857519&imgtype=0&src=http%3A%2F%2Fringcdn.shoujiduoduo.com%2Fwallpaper%2Fdd%2Fthumb%2Ft_295654.jpg'}}
                                style={{height:40,width:40,borderRadius:20}}
                            />
                        </View>
                        <View style={[AppStyles.flex3]}>
                            <Text style={{fontSize:11}}>{"[告警]"}</Text>
                            <Text style={{fontSize:11,fontWeight:'400'}}>{"用户：未知位置：摄像头3"}</Text>
                        </View>
                        <View style={[AppStyles.flex1]}>
                            <Text style={{fontSize:11,fontWeight:'400'}}>{"5分钟前"}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                <Spacer size={10}/>
            </View>
        );
    }
}

/* Export Component ==================================================================== */
export default MsgCenter;
