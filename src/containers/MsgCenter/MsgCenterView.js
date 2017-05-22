import React, { PropTypes,Component } from 'react';
import { View,Slider,Image,TouchableHighlight,ListView ,InteractionManager} from 'react-native';

// Consts and Libs
import { AppStyles } from '@theme/';
import { Actions } from 'react-native-router-flux';
// Components
import { Text,Spacer, List, } from '@ui/';
import { ButtonGroup } from 'react-native-elements';

class MsgCenter extends Component {
    static componentName = 'MsgCenter';

    static propTypes = {
    }

    constructor(props) {
        super(props);
        this.updateIndex = this.updateIndex.bind(this)
        this.getDetail = this.getDetail.bind(this)
        this.renderItem = this.renderItem.bind(this);
        this.onPressItem = this.onPressItem.bind(this);
        this.state= {
            value: 0.5 ,
            selectedIndex: 1,
            dataSource:new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            results:[]
        };
    }
    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
        fetch("http://rapapi.org/mockjsdata/18498/msg")
            .then((response) => response.json())
            .then((responseData) => {
                console.info(responseData)
                this.setState({
                    results:responseData.result
                })
            })
            .catch((error) => {
            })
            .done();
    }
    getDetail () {
        console.info("======")
        fetch("http://rapapi.org/mockjsdata/18498/msg")
            .then((response) => response.json())
            .then((responseData) => {
               this.setState({
                   results:responseData.result
               })
            })
            .catch((error) => {
            })
            .done();
    }

    componentWillMount(){
        this.getDetail()
    }

    onPressItem(listContent) {
        Actions.msgdetail({item:listContent})
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
                <TouchableHighlight onPress={()=> { this.onPressItem(listContent) }}
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
        return (
                <View style={{flex:1,backgroundColor:'#f5f5f5'}}>
                    <ButtonGroup
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={["未查看","已查看"]}
                        TextStyle={{fontSize:11}}
                        containerStyle={{height: 30}} />
                    <Spacer size={10}/>
                    {this.renderContent(this.state.dataSource.cloneWithRows(this.state.results))}
                </View>)
    }
}

/* Export Component ==================================================================== */
export default MsgCenter;
