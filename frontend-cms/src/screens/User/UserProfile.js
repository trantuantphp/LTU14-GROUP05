/* eslint-disable react/jsx-wrap-multilines */
import React, { Component } from 'react';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    message,
    Upload
} from 'antd';

const { Option } = Select;
const props = {
    action: '//jsonplaceholder.typicode.com/posts/',
    listType: 'picture',
    previewFile(file) {
        console.log('Your upload file:', file);
        // Your process logic. Here we just mock to the same file
        return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
            method: 'POST',
            body: file
        })
            .then(res => res.json())
            .then(({ thumbnail }) => thumbnail);
    }
};
const AutoCompleteOption = AutoComplete.Option;
class UserProfile extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: []
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    handleConfirmBlur = e => {
        const { value } = e.target;
        // eslint-disable-next-line react/no-access-state-in-setstate
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Hai mật khẩu không trùng nhau!');
        } else {
            callback();
        }
    };
    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };
    handleWebsiteChange = value => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(
                domain => `${value}${domain}`
            );
        }
        this.setState({ autoCompleteResult });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 }
            }
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0
                },
                sm: {
                    span: 16,
                    offset: 8
                }
            }
        };
        // const prefixSelector = getFieldDecorator('prefix', {
        //     initialValue: '86'
        // })(
        //     <Select style={{ width: 70 }}>
        //         <Option value='84'>+84</Option>
        //         <Option value='85'>+85</Option>
        //         <Option value='86'>+86</Option>
        //         <Option value='87'>+87</Option>
        //     </Select>
        // );
        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));
        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label='E-mail'>
                    {getFieldDecorator('email', {
                        rules: [
                            {
                                type: 'email',
                                message: 'E-mail không hợp lệ!'
                            },
                            {
                                required: true,
                                message: 'Vui lòng điền E-mail của bạn!'
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label='Mật khẩu' hasFeedback>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng điền mật khẩu của bạn!'
                            },
                            {
                                validator: this.validateToNextPassword
                            }
                        ]
                    })(<Input.Password />)}
                </Form.Item>
                <Form.Item label='Xác nhận mật khẩu' hasFeedback>
                    {getFieldDecorator('confirm', {
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng xác nhận mật khẩu của bạn!'
                            },
                            {
                                validator: this.compareToFirstPassword
                            }
                        ]
                    })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                </Form.Item>
                <Form.Item
                    label={
                        <span>
                            Tên đăng nhập&nbsp;
                            <Tooltip title='Bạn muốn biệt hiệu của bạn là gì?'>
                                <Icon type='question-circle-o' />
                            </Tooltip>
                        </span>
                    }
                >
                    {getFieldDecorator('nickname', {
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng điền tên đăng nhập của bạn!',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label='Số điện thoại'>
                    {getFieldDecorator('phone', {
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng điền số điện thoại của bạn!'
                            }
                        ]
                    })(
                        <Input
                            // addonBefore={prefixSelector}
                            style={{ width: '100%' }}
                        />
                    )}
                </Form.Item>
                <Form.Item label='Ảnh đại diện'>
                    <div>
                        <Upload {...props}>
                            <Button>
                                <Icon type='upload' /> Tải lên
                            </Button>
                        </Upload>
                    </div>
                </Form.Item>
            </Form>
        );
    }
}

export default Form.create()(UserProfile);
