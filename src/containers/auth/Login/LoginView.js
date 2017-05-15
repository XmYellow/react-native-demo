/**
 * Login Screen
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component, PropTypes } from 'react';
import {
    ScrollView,
    AsyncStorage,
    TouchableOpacity,
    Image,
    View
} from 'react-native';
import FormValidation from 'tcomb-form-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';
// Consts and Libs
import AppAPI from '@lib/api';
import { AppStyles, AppSizes } from '@theme/';

// Components
import { Alerts, Card, Spacer, Text, Button } from '@ui/';

/* Component ==================================================================== */
class Login extends Component {
    static componentName = 'Login';

    static propTypes = {
        login: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        // UserName Validation
        const validUserName = FormValidation.refinement(
            FormValidation.String, (username) => {
                if (username != 'huang') return false;
                return true;
            }
        );

        // Password Validation - Must be 6 chars long
        const validPassword = FormValidation.refinement(
            FormValidation.String, (password) => {
                if (password.length < 6) return false;
                return true;
            }
        );

        this.state = {
            resultMsg: {
                status: '',
                success: '',
                error: ''
            },
            form_fields: FormValidation.struct({
                用户名: validUserName,
                密码: validPassword
            }),
            empty_form_values: {
                UserName: '',
                Password: ''
            },
            form_values: {},
            options: {
                fields: {
                    UserName: {
                        error: '请输入用户名',
                        autoCapitalize: 'none',
                        clearButtonMode: 'while-editing'
                    },
                    Password: {
                        error: '请输入大于6位密码',
                        clearButtonMode: 'while-editing',
                        secureTextEntry: true
                    },
                },
            },
        };
    }

    componentDidMount = async () => {
        // Get user data from AsyncStorage to populate fields
        const values = await AsyncStorage.getItem('api/credentials');
        const jsonValues = JSON.parse(values);

        if (values !== null) {
            this.setState({
                form_values: {
                    UserName: jsonValues.username,
                    Password: jsonValues.password
                },
            });
        }
    }

    /**
     * Login
     */
    login = () => {
        // Get new credentials and update
        const credentials = this.form.getValue();

        // Form is valid
        if (credentials) {
            this.setState({form_values: credentials}, () => {
                this.setState({resultMsg: {status: 'One moment...'}});

                // Scroll to top, to show message
                if (this.scrollView) {
                    this.scrollView.scrollTo({y: 0});
                }

                this.props.login({
                    username: credentials.UserName,
                    password: credentials.Password
                }, true).then(() => {
                    this.setState({
                        resultMsg: {success: '登录成功!'}
                    }, () => {
                        setTimeout(() => {
                            Actions.app({type: 'reset'});
                        }, 1000);
                    });
                }).catch((err) => {
                    const error = AppAPI.handleError(err);
                    this.setState({resultMsg: {error}});
                });
            });
        }
    }

    render = () => {
        const Form = FormValidation.form.Form;

        return (
            <ScrollView
                automaticallyAdjustContentInsets={false}
                ref={(a) => { this.scrollView = a; }}

            >
                <View style={{paddingHorizontal:25}}>
                    <Alerts
                        status={this.state.resultMsg.status}
                        success={this.state.resultMsg.success}
                        error={this.state.resultMsg.error}
                    />
                    <View style={[AppStyles.row]}>
                        <View style={[AppStyles.flex1]}/>
                        <View style={[AppStyles.flex2]}>
                            <Image
                                source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493806221026&di=1d4d48839f5918b62e4bdf7347857519&imgtype=0&src=http%3A%2F%2Fringcdn.shoujiduoduo.com%2Fwallpaper%2Fdd%2Fthumb%2Ft_295654.jpg'}}
                                style={{height:100,width:100,borderRadius:50,marginVertical:15}}
                            />
                        </View>
                        <View style={[AppStyles.flex1]}/>
                    </View>
                    <Form
                        ref={(b) => { this.form = b; }}
                        type={this.state.form_fields}
                        value={this.state.form_values}
                        options={this.state.options}
                    />
                    <Button
                        title={'登录'}
                        onPress={this.login}
                    />
                    <Spacer size={10}/>
                </View>
            </ScrollView>
        );
    }
}

/* Export Component ==================================================================== */
export default Login;
