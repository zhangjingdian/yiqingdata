import { Menu } from 'antd';
import { connect } from 'dva';
function WrapLayout({ common, dispatch }) {
  const handleClick = e => {
    dispatch({
      type: 'common/updateState',
      payload: {
        current: e.key
      }
    })
  }
  return (
    <div>
      <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={common.current}
        mode="inline"
      // theme='dark'
      >
        <Menu.Item key="1">动态播报</Menu.Item>
        <Menu.Item key="2">确诊地点</Menu.Item>
        <Menu.Item key="3">同程查询</Menu.Item>
        <Menu.Item key="4">分布地图</Menu.Item>
        <Menu.Item key="5">谣言鉴别</Menu.Item>
        <Menu.Item key="6">疫情统计</Menu.Item>
      </Menu>
    </div>
  )
}
export default connect(common => common)(WrapLayout);