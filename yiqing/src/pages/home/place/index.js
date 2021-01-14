import { connect } from 'dva';
import { Card, Form, Input, Button, Table } from 'antd';
// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 16 },
// };
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const columns = [
  {
    title: '地点名称',
    dataIndex: 'locale',
    align: 'center',
    key: 'locale',
  },
  {
    title: '详细地址',
    dataIndex: 'address',
    align: 'center',
    key: 'address',
  },
  {
    title: '经度',
    dataIndex: 'lng',
    align: 'center',
    key: 'lng',
  },
  {
    title: '纬度',
    dataIndex: 'lat',
    align: 'center',
    key: 'lat',
  },
  {
    title: '消息来源',
    dataIndex: 'source',
    align: 'center',
    key: 'source',
  },
];
function Place({ dispatch, Home }) {

  const onFinish = (values) => {
    dispatch({
      type: 'Home/getPlace',
      payload: values
    })
  };
  return (
    <div>
      <Card title="确诊地点查询" style={{ width: '100%' }}>
        <Form
          // {...layout}
          layout='inline'
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label="省份"
            name="province"
            rules={[{ required: true, message: '请填写对应省份' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="城市"
            name="city"
            rules={[{ required: true, message: '请填写对应城市' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="区县"
            name="district"
            rules={[{ required: true, message: '请填写对应区县' }]}
          >
            <Input />
          </Form.Item>


          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              查询
        </Button>
          </Form.Item>
        </Form>
      </Card>
      <Card style={{ width: '100%' }}>
        <Table dataSource={Home.placeList} columns={columns} />;
      </Card>
    </div>
  )
}
export default connect(({ common, Home }) => ({ common, Home }))(Place);