import { connect } from 'dva';
import { Card, Statistic, Row, Col } from 'antd';
import { useEffect } from 'react';

function Statistics({ dispatch, Home }) {
  useEffect(() => {
    dispatch({
      type: 'Home/getStatistic'
    })
  }, [dispatch])
  return (
    <div>
      <Card title="疫情统计" style={{ width: '100%' }}>
        {
          JSON.stringify(Home.collect) !== '{}' && <Row gutter={[8, 30]}>
            <Col span={4}>
              <Statistic title="确诊总数" value={Home.collect.confirmedCount} valueStyle={{ color: '#FF0000' }} />
            </Col>
            <Col span={4}>
              <Statistic title="今日新增确诊数" value={Home.collect.confirmedAdd} valueStyle={{ color: '#FF2400' }} />
            </Col>
            <Col span={4}>
              <Statistic title="疑似病例总数" value={Home.collect.suspectedCount} valueStyle={{ color: '#8E2323' }} />
            </Col>
            <Col span={4}>
              <Statistic title="今日新增疑似病例" value={Home.collect.suspectedAdd} valueStyle={{ color: '#E47833' }} />
            </Col>
            <Col span={4}>
              <Statistic title="重症总数" value={Home.collect.severecasesCount} valueStyle={{ color: '#2F2F4F' }} />
            </Col>
            <Col span={4}>
              <Statistic title="今日新增重症数" value={Home.collect.severecasesAdd} valueStyle={{ color: '#42426F' }} />
            </Col>
            <Col span={4}>
              <Statistic title="死亡总数" value={Home.collect.deadCount} valueStyle={{ color: '#CC0000' }} />
            </Col>
            <Col span={4}>
              <Statistic title="今日新增死亡数" value={Home.collect.deathAdd} valueStyle={{ color: '#DD0000' }} />
            </Col>
            <Col span={4}>
              <Statistic title="治愈总数" value={Home.collect.curedCount} valueStyle={{ color: '#238E68' }} />
            </Col>
            <Col span={4}>
              <Statistic title="今日新增治愈病例" value={Home.collect.cureAdd} valueStyle={{ color: '#236B8E' }} />
            </Col>
            <Col span={8}>
              <Statistic title="截止更新时间" value={Home.collect.updateTime} />
            </Col>
          </Row>
        }
      </Card>
    </div>
  )
}
export default connect(({ common, Home }) => ({ common, Home }))(Statistics);