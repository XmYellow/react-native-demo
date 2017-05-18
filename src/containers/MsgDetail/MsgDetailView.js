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
        result: PropTypes.array
    }

    constructor(props) {
        super(props);
        const { item } = props
        this.getDetail = this.getDetail.bind(this)
        this.state = {
            msg_id:item.msg_id,
            result:{
                id_num:'',
                id_type:'',
                nationality:'',
                sex:'',
                title:item.name,
                url:item.url,
                name:item.name,
                camera:item.camera,
            }
        }
    }

    warning = () => {
        console.info("warning")
    }
    getDetail(msg_id) {
        console.info(msg_id)
        let params = {
            "msg_id": msg_id,
        };
        fetch("http://rapapi.org/mockjsdata/18498/detail", {
            method: 'POST',
            //headers: {
            //    'token': token,
            //    'Access-Control-Allow-Headers': 'token'
            //},
            body: JSON.stringify(params)
        })  .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    result:responseData.result
                })
            })
            .catch((error) => {
                console.info(error)
            })
    }

    componentWillMount(){
        this.getDetail(this.state.msg_id)
        console.info(this.state.result)
    }
    render = () => {

        return (
            <View style={{paddingVertical:51}}>
                <View style={[AppStyles.row]}>
                    <View style={[AppStyles.flex1]}>
                        <Image
                            source={{uri: this.state.result.url}}
                            style={{height:200}}
                        />
                        <Text style={{position:'absolute',color:'#fff',margin:5,backgroundColor:'rgba(0, 0, 0, 0.5)'}}>{'位置：'}{this.state.result.camera}</Text>
                    </View>
                </View>
                <View style={{padding:5}}>
                    <View style={[AppStyles.row]}>
                        <View style={[AppStyles.flex1]}>
                            <Text style={{fontSize:11,fontWeight:'400'}}>{'用户：'}{this.state.result.name}</Text>
                        </View>
                        <View style={[AppStyles.flex1]}>
                            <Text style={{fontSize:11,fontWeight:'400'}}>{'性别：'}{this.state.result.sex}</Text>
                        </View>
                    </View>
                    <Text style={{fontSize:11,fontWeight:'400'}}>{'证件类型：'}{this.state.result.id_type}</Text>
                    <Text style={{fontSize:11,fontWeight:'400'}}>{'身份证号：'}{this.state.result.id_num}</Text>
                    <Text style={{fontSize:11,fontWeight:'400'}}>{'国籍：'}{this.state.result.nationality}</Text>
                    <Text style={{fontSize:11,fontWeight:'400'}}>{'发现处理：'}{this.state.result.title}</Text>
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
