import React, { PropTypes,Component } from 'react';
import { View,Slider,Image,TouchableHighlight,ListView } from 'react-native';

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
        this.updateIndex = this.updateIndex.bind(this)
        this.getDetail = this.getDetail.bind(this)
        const ds =new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        })
        this.state= {
            value: 0.5 ,
            selectedIndex: 1,
            dataSource: ds.cloneWithRows([
                {
                    "msg_id": "5749b4b2-ce66-4853-b350-c14d308978",
                    "title": "黑名单",
                    "name": "none",
                    "camera": "大堂1",
                    "url": "http://qiniupics.oss-cn-shanghai.aliyuncs.com/0db4b8a40dbe2df9a9c3b1f0d9a37c02",
                    "createdAt": "2017-04-18 14:40:25"
                } ,{
                    "msg_id": "5749b4b2-ce66-4853-b350-c14d306d75b9",
                    "title": "警告",
                    "name": "none",
                    "camera": "大堂2",
                    "url": "http://qiniupics.oss-cn-shanghai.aliyuncs.com/0db4b8a40dbe2df9a9c3b1f0d9a37c02",
                    "createdAt": "2017-04-18 14:40:25"
                }])
        };
    }
    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
    }
    getDetail () {
        console.info("======")
        console.info(this)

    }
    modify = () => {
    }

    renderContent(dataSource) {
        return (
            <ListView
                initialListSize={1}
                dataSource={dataSource}
                renderRow={this.renderItem}
                style={{flex: 1}}
                onEndReachedThreshold={10}
                enableEmptySections={true}
            />
        );
    }

    renderItem(listContent) {
        return (
            <View style={{paddingHorizontal:10}}>
                <TouchableHighlight onPress={Actions.msgdetail}
                                    underlayColor={'#fff'}>
                    <View style={[AppStyles.row]} >
                        <View style={[AppStyles.flex1]}>
                            <Image
                                source={{uri: listContent.url}}
                                style={{height:40,width:40,borderRadius:20}}
                            />
                        </View>
                        <View style={[AppStyles.flex3]}>
                            <Text style={{fontSize:11}}>[{listContent.title}]</Text>
                            <Text style={{fontSize:11,fontWeight:'400'}}>用户:{listContent.name}{"  "}位置:{listContent.camera}</Text>
                        </View>
                        <View style={[AppStyles.flex1]}>
                            <Text style={{fontSize:11,fontWeight:'400'}}>{"5分钟前"}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                <Spacer size={10}/>
            </View>
        )
    }

    render = () => {
        const { selectedIndex } = this.state
        this.getDetail()
        return (
                <View style={{flex:1,marginTop:54,backgroundColor:'#f5f5f5'}}>
                    <ButtonGroup
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={["未查看","已查看"]}
                        TextStyle={{fontSize:11}}
                        containerStyle={{height: 30}} />
                    <Spacer size={10}/>

                    {this.renderContent(this.state.dataSource)}

                </View>)

    }
}

/* Export Component ==================================================================== */
export default MsgCenter;
