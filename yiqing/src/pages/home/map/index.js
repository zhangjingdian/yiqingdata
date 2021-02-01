import { connect } from 'dva';
import { Card, message } from 'antd';
import * as echarts from 'echarts'
import geoJson from './china.json';
import { getMap } from '../../../services/common';
import { useState, useEffect, useCallback } from 'react';
function Map({ dispatch, Home }) {
  const [data, setData] = useState(JSON.stringify([]));
  const init = useCallback(() => {
    echarts.registerMap('china', geoJson);
    let myChart = echarts.init(document.getElementById('main'));
    let option = {
      title: {
        text: '全国实时疫情数据分布图',//主标题
        subtext: '战斗进行时---他们还在努力',   //副标题            
        left: 'center'
      },
      series: [{
        type: 'map', //eCharts类型
        map: 'china',    //地图类型
        zoom: 1.2,
        label: {
          show: false
        },
        //向echart传入的数据
        data: JSON.parse(data)
      }
      ],
      tooltip: {
        //信息出现的方式
        triggerOn: 'mousemove',
        formatter: function (param) {
          //南海诸岛需要处理，那个地方没有数据会报错              //判断是否有值没有则设置为0
          return `地区:${param.name}<br/>现存确诊:${param?.value || 0}<br/>治愈:${param.data?.curedCount || 0}<br/>死亡:${param.data?.deadCount || 0}`
        }
      },
      visualMap: [
        {
          type: 'piecewise',   //颜色形式
          pieces: [    //设置颜色
            { gt: 1000 },
            { gt: 500, lte: 1000 },
            { gt: 100, lte: 500 },
            { gt: 50, lte: 100 },
            { gt: 1, lte: 50 },
            { lte: 0 }
          ],
          inRange: {//具体颜色值
            color: ['rgb(255,255,255)', 'rgb(253,235,207)', 'rgb(229,90,78)', 'rgb(203,42,47)', 'rgb(129,28,36)', 'rgb(79,7,13)']
          }
        }]
    };
    myChart.on('click', function (params) {
      console.log(params);
    })
    myChart.setOption(option);
  }, [data])
  const getList = useCallback(() => {
    getMap().then((res) => {
      if (res.code === 200) {
        let data = res.newslist;
        data.forEach(item => {
          item['name'] = item.provinceName;
          item['value'] = item.currentConfirmedCount;
        });
        setData(JSON.stringify(data));
      } else {
        message.error(res.msg);
      }
    }).then(() => {
      init();
    })
  }, [init]);
  useEffect(() => {
    getList();
  }, [getList])
  return (
    <div>
      <Card title="疫情分布地图" style={{ width: '100%' }}>
        <div id="main" style={{ width: 600, height: 400, margin: '0 auto' }}></div>
      </Card>
    </div>
  )
}
export default connect(({ common, Home }) => ({ common, Home }))(Map);