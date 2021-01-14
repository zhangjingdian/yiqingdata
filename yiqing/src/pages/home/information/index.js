import { useEffect } from 'react';
import { connect } from 'dva';
import { Card, List } from 'antd';
function Information({ common, dispatch, Home }) {
  const { desc, news } = Home;
  useEffect(() => {
    dispatch({
      type: 'Home/getNews'
    })
  }, [dispatch])
  return (
    <div>
      <Card title="新冠病毒" style={{ width: '100%', marginBottom: 20 }}>
        <p>{desc.note1}</p>
        <p>{desc.note2}</p>
        <p>{desc.note3}</p>
        <p>{desc.remark1}</p>
        <p>{desc.remark2}</p>
        <p>{desc.remark3}</p>
      </Card>

      <div style={{ backgroundColor: '#fff', padding: 20 }}>
        {
          news.length > 0 && <List
            itemLayout="vertical"
            size="default"
            pagination={false}
            dataSource={news}
            renderItem={item => (
              <List.Item
                key={item.id}
                extra={
                  <img
                    style={{ width: 245, height: 180 }}
                    alt=""
                    src={item.picUrl}
                  />
                }
              >
                <List.Item.Meta
                  title={<a href={item.sourceUrl}>{item.title}</a>}
                  description={`${item.infoSource}-${item.pubDateStr}`}
                />
                {`${item.summary}...`}
              </List.Item>
            )}
          />
        }
      </div>
    </div>
  )
}
export default connect(({ common, Home }) => ({ common, Home }))(Information);