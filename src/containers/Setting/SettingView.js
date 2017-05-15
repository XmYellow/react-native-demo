import React, { PropTypes,Component } from 'react';
import { View,Slider,Modal,TouchableHighlight,Text,TextInput,Button } from 'react-native';

// Consts and Libs
import { AppStyles } from '@theme/';

// Components
import {Spacer } from '@ui/';

class Setting extends Component {
    static componentName = 'Setting';

    static propTypes = {
        value: PropTypes.number
    }

    constructor(props) {
        super(props);

        this.state = {
            value: 0.5,
            modalVisible: false,
            text: '1231232'
        };
    }
    onButtonPress = () => {
        Alert.alert('Button has been pressed!');
    };
    modify = () => {
    }
    setModalVisible = (visible) => {
        this.setState({
            modalVisible: visible
        });
    }
    render = () => {
        return (
            <View style={{paddingVertical:60,paddingHorizontal:10}}>
                <View style={[AppStyles.row]}>
                    <Text style={{fontSize:14,fontWeight:'400'}}>{"通知设置"}</Text>
                </View>
                <Spacer size={5}/>
                <View style={[AppStyles.row]}>
                    <View style={[AppStyles.flex3]}>
                        <Text style={{fontSize:11,fontWeight:'400'}}>{"通知音量设置"}</Text>
                    </View>
                    <View style={[AppStyles.flex5]}>
                        <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
                            <Slider
                                value={this.state.value}
                                onValueChange={(value) => this.setState({value})}/>
                        </View>
                    </View>
                </View>
                <Spacer size={15}/>
                <View style={[AppStyles.row]}>
                    <Text style={{fontSize:14,fontWeight:'400'}}>{"服务器地址设置"}</Text>
                </View>
                <Spacer size={5}/>
                <View >
                    <View style={[AppStyles.row]}>
                        <View style={[AppStyles.flex6]}>
                            <Text
                                style={{fontWeight:'400',fontSize:10}}>{"http://safe.xxxxxx.com/pid/1234151234"}</Text>
                        </View>
                        <View style={[AppStyles.flex1]}>
                            <TouchableHighlight
                                onPress={() => {this.setModalVisible(true)}}
                                underlayColor={'#fff'}>
                                <Text style={{fontSize:11,color:'#03a9f4'}}>{"修改"}</Text>
                            </TouchableHighlight>
                        </View>
                        <Modal
                            animationType={"fade"}
                            transparent={true}
                            visible={this.state.modalVisible}
                            onRequestClose={() => {alert("Modal has been closed.")}}
                        >
                            <View  style={{backgroundColor:'rgba(0, 0, 0, 0.5)',height:'100%'}} >
                                <View
                                    style={{marginTop: 130,height:130,width:'80%', backgroundColor:'#fff',borderRadius:7,
                                marginHorizontal:'10%'}}>
                                    <View style={{margin:13}}>
                                        <View style={[AppStyles.row]} >
                                            <View style={[AppStyles.flex6]}>
                                                <Text>{"修改网络ID"}</Text>
                                            </View>
                                            <View style={[AppStyles.flex1]}>
                                                <TouchableHighlight
                                                    onPress={() => {this.setModalVisible(!this.state.modalVisible)}}
                                                    underlayColor={'#fff'}
                                                >
                                                    <Text style={{fontSize:25,marginTop:-10,marginLeft:10}}>{"×"}</Text>
                                                </TouchableHighlight>
                                            </View>
                                        </View>
                                        <View style={{marginTop:10}}>
                                            <TextInput
                                                style={{height: 40, borderColor: '#808080', borderWidth: 1}}
                                                onChangeText={(text) => this.setState({text})}
                                                value={this.state.text}
                                            />
                                        </View>
                                        <TouchableHighlight
                                            onPress={() => {this.setModalVisible(!this.state.modalVisible)}}
                                            underlayColor={'#fff'}
                                        >
                                            <Text style={{fontSize:14,color:'#03a9f4',marginTop:10,textAlign:'center'}}>{"保存修改"}</Text>
                                        </TouchableHighlight>
                                    </View>
                                </View>
                            </View>

                        </Modal>
                    </View>
                </View>
                <Spacer size={10}/>
                <View style={[AppStyles.row]}>
                    <Text style={{color:'#ccc',fontSize:10}}>{"请勿随便修改这个地址，以免服务无法正常使用"}</Text>
                </View>
            </View>
        );
    }
}
/* Export Component ==================================================================== */
export default Setting;
