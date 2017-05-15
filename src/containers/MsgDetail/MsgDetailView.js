import React, { PropTypes,Component } from 'react';
import { View,Slider,Image,TouchableHighlight } from 'react-native';

// Consts and Libs
import { AppStyles } from '@theme/';

// Components
import { Text,Spacer, List,Button } from '@ui/';
import { ButtonGroup } from 'react-native-elements';

var data = [{id: 1}, {id: 2}, {id: 3}, {id: 4}]

class MsgCenter extends Component {
    static componentName = 'MsgDetail';

    static propTypes = {
        value: PropTypes.number
    }

    constructor(props) {
        super(props);
        this.state = {
            name: '张三',
            gender: '男',
            credentials: '身份证',
            card_id: '32143254',
            country: '张三',
            position: '摄像头1'
        }
    }

    warning = () => {
        console.info("warning")
    }

    render = () => {
        return (
            <View style={{paddingVertical:51}}>
                <View style={[AppStyles.row]}>
                    <View style={[AppStyles.flex1]}>
                        <Image
                            source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493806221026&di=1d4d48839f5918b62e4bdf7347857519&imgtype=0&src=http%3A%2F%2Fringcdn.shoujiduoduo.com%2Fwallpaper%2Fdd%2Fthumb%2Ft_295654.jpg'}}
                            style={{height:200}}
                        />
                        <Text style={{position:'absolute',color:'#fff',margin:5,backgroundColor:'rgba(0, 0, 0, 0.5)'}}>{'位置：'}{this.state.position}</Text>
                    </View>
                </View>
                <View style={{padding:5}}>
                    <View style={[AppStyles.row]}>
                        <View style={[AppStyles.flex1]}>
                            <Text style={{fontSize:11,fontWeight:'400'}}>{'用户：'}{this.state.name}</Text>
                        </View>
                        <View style={[AppStyles.flex1]}>
                            <Text style={{fontSize:11,fontWeight:'400'}}>{'性别：'}{this.state.gender}</Text>
                        </View>
                    </View>
                    <Text style={{fontSize:11,fontWeight:'400'}}>{'证件类型：'}{this.state.credentials}</Text>
                    <Text style={{fontSize:11,fontWeight:'400'}}>{'身份证号：'}{this.state.card_id}</Text>
                    <Text style={{fontSize:11,fontWeight:'400'}}>{'国籍：'}{this.state.country}</Text>
                    <Text style={{fontSize:11,fontWeight:'400'}}>{'发现处理：'}{'报警'}</Text>
                </View>
                <View style={[AppStyles.row]}>
                    <View style={[AppStyles.flex2]}>
                        <Text style={{padding:5,fontSize:11,fontWeight:'400'}}>{'发现时间：'}{'8分钟前'}</Text>
                    </View>
                    <View style={[AppStyles.flex1]}>
                        <Button style={{fontSize:11,color:'#03a9f4'}} title={'报警'} onPress={this.warning}/>
                    </View>
                </View>
            </View>
        );
    }
}

/* Export Component ==================================================================== */
export default MsgCenter;
