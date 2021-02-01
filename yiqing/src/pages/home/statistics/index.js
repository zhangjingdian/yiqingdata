import { connect } from 'dva';
import { Card, Statistic, Row, Col } from 'antd';
import { useEffect } from 'react';
import {
  Player, ControlBar,
  PlayToggle, // PlayToggle 播放/暂停按钮 若需禁止加 disabled
  ReplayControl, // 后退按钮
  ForwardControl,  // 前进按钮
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,  // 倍速播放选项
  VolumeMenuButton
} from 'video-react';
import "../../../../node_modules/video-react/dist/video-react.css";

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
      <Card title="视频播放" style={{ width: '100%', marginTop: 20 }}>
        <Player
          playsInline
          fluid={false}
          height={600}
          width={'100%'}
          // poster="/assets/poster.png"
          src="https://ycalvod.yicai.com/vms-new/2020/03/f9cc9e14-6381-4ced-a093-411193dce2f9.mp4?auth_key=1612184631-0-0-1ae871bc7593b989b87a73d55d3f2fab&ycfrom=yicaiwww"
        >
          <ControlBar autoHide={false} disableDefaultControls={false}>
            <ReplayControl seconds={10} order={1.1} />
            <ForwardControl seconds={30} order={1.2} />
            <PlayToggle />
            <CurrentTimeDisplay order={4.1} />
            <TimeDivider order={4.2} />
            <PlaybackRateMenuButton rates={[5, 2, 1.5, 1, 0.5]} order={7.1} />
            <VolumeMenuButton />
          </ControlBar>
        </Player>
      </Card>
    </div>
  )
}
export default connect(({ common, Home }) => ({ common, Home }))(Statistics);