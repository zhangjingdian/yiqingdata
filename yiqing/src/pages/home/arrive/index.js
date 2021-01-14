import { connect } from 'dva';
import { Card, Form, Input, Button, Table, Select, DatePicker } from 'antd';
import moment from 'moment';
import { useState } from 'react';
const { Option } = Select;
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function Arrive({ dispatch, Home }) {
  const [values, setValues] = useState({});
  const columns = [
    {
      title: '日期',
      dataIndex: 'date',
      align: 'center',
    },
    {
      title: '车次',
      dataIndex: 'no',
      align: 'center',
    },
    {
      title: '座位号',
      dataIndex: 'memo',
      align: 'center',
    },
    {
      title: '出发地',
      dataIndex: 'pos_start',
      align: 'center',
    },
    {
      title: '目的地',
      dataIndex: 'pos_end',
      align: 'center',
    },
    {
      title: '详情',
      dataIndex: 'details',
      align: 'center',
      render: (text, record) => {
        return (
          <a href={record.source}>查看详情</a>
        )
      }
    }
  ];
  const onFinish = (values) => {
    values.date = moment(values.data).format('YYYY-MM-DD');
    setValues(values);
    dispatch({
      type: 'Home/getArrive',
      payload: values
    })
  };
  const pageChangeHandler = (current) => {
    dispatch({
      type: 'Home/getArrive',
      payload: {
        page: current,
        ...values
      }
    })
  }
  const pagination = {
    current: Home.page,
    total: Home.arriveList.length,
    pageSize: Home.num,
    onChange: pageChangeHandler,
  };
  return (
    <div>
      <Card title="同程查询" style={{ width: '100%' }}>
        <Form
          // {...layout}
          layout='inline'
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label="到达地点"
            name="arrive"
            rules={[{ required: true, message: '请填写到达地点' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="车次"
            name="no"
            rules={[{ required: true, message: '请填写车次' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="时间"
            name="date"
            rules={[{ required: true, message: '请选择时间' }]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            label="交通类型"
            name="type"
            rules={[{ required: true, message: '请选择交通类型' }]}
          >
            <Select style={{ width: 181 }}>
              <Option value="1">飞机</Option>
              <Option value="2">火车</Option>
              <Option value="3">地铁</Option>
              <Option value="4">汽车</Option>
            </Select>
          </Form.Item>


          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              查询
        </Button>
          </Form.Item>
        </Form>
      </Card>
      <Card style={{ width: '100%' }}>
        <Table dataSource={Home.arriveList} columns={columns} pagination={pagination} />;
      </Card>
    </div>
  )
}
export default connect(({ common, Home }) => ({ common, Home }))(Arrive);