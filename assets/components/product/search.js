import React from 'react'
import { Form, Input, Row, Col, Button, DatePicker } from 'antd'
const FormItem = Form.Item;

export default React.createClass({
	render(){
		return <Form horizontal className="ant-advanced-search-form">
					<Row>
						<Col sm={6}>
							<FormItem label="搜索名称" labelCol={{ span: 6 }} wrapperCol={{ span: 14 }}>
								<Input placeholder="请输入搜索名称" size="default" />
							</FormItem>
							<FormItem label="较长搜索名称" labelCol={{ span: 6 }} wrapperCol={{ span: 14 }}>
								<DatePicker size="default" />
							</FormItem>
							<FormItem label="搜索名称" labelCol={{ span: 6 }} wrapperCol={{ span: 14 }}>
								<Input placeholder="请输入搜索名称" size="default" />
							</FormItem>
						</Col>
						<Col sm={6}>
							<FormItem label="搜索名称" labelCol={{ span: 6 }} wrapperCol={{ span: 14 }}>
								<Input placeholder="请输入搜索名称" size="default" />
							</FormItem>
							<FormItem label="较长搜索名称" labelCol={{ span: 6 }} wrapperCol={{ span: 14 }}>
								<DatePicker size="default" />
							</FormItem>
							<FormItem label="搜索名称" labelCol={{ span: 6 }} wrapperCol={{ span: 14 }}>
								<Input placeholder="请输入搜索名称" size="default" />
							</FormItem>
						</Col>
						<Col sm={6}>
							<FormItem label="搜索名称" labelCol={{ span: 6 }} wrapperCol={{ span: 14 }}>
								<Input placeholder="请输入搜索名称" size="default" />
							</FormItem>
							<FormItem label="较长搜索名称" labelCol={{ span: 6 }} wrapperCol={{ span: 14 }}>
								<DatePicker size="default" />
							</FormItem>
							<FormItem label="搜索名称" labelCol={{ span: 6 }} wrapperCol={{ span: 14 }}>
								<Input placeholder="请输入搜索名称" size="default" />
							</FormItem>
						</Col>
						<Col sm={6}>
							<FormItem label="搜索名称" labelCol={{ span: 6 }} wrapperCol={{ span: 14 }}>
								<Input placeholder="请输入搜索名称" size="default" />
							</FormItem>
							<FormItem label="较长搜索名称" labelCol={{ span: 6 }} wrapperCol={{ span: 14 }}>
								<DatePicker size="default" />
							</FormItem>
							<FormItem label="搜索名称" labelCol={{ span: 6 }} wrapperCol={{ span: 14 }}>
								<Input placeholder="请输入搜索名称" size="default" />
							</FormItem>
						</Col>
					</Row>
					<Row>
						<Col span={12} offset={12} style={{ textAlign: 'right' }}>
							<Button type="primary" htmlType="submit">搜索</Button>
						</Col>
					</Row>
			  </Form>
	}
})