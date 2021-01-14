import { connect } from 'dva';
import { Card, Collapse } from 'antd';
import { useEffect } from 'react';
const { Panel } = Collapse;

function Rumor({ dispatch, Home }) {
  useEffect(() => {
    dispatch({
      type: 'Home/getRumor',
    })
  }, [dispatch])
  return (
    <div>
      <Card title="谣言鉴别" style={{ width: '100%' }}>
        <Collapse accordion>
          {
            Home.rumorList.length > 0 && Home.rumorList.map((item) => {
              return (
                <Panel header={`${item.title}--${item.date}--${item.explain}`} key={item.id}>
                  <p style={{ letterSpacing: 2, lineHeight: 1.8 }}>{item.desc}</p>
                  <p style={{ textAlign: 'right', fontSize: 12 }}>{item.author}</p>
                  <p style={{ textAlign: 'right', fontSize: 12 }}>
                    <a href={item.url}>查看详情</a>
                  </p>
                </Panel>
              )
            })
          }
        </Collapse>
      </Card>
    </div>
  )
}
export default connect(({ common, Home }) => ({ common, Home }))(Rumor);