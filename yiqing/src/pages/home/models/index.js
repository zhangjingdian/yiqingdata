import { getNews, getPlace, getArrive, getMap, getRumor, getStatistic } from '../../../services/common';
import { message } from 'antd';
export default {
  namespace: 'Home',
  state: {
    page: 1,
    num: 10,
    desc: {},
    news: {},
    placeList: [],
    typeGroup: { 1: '飞机', 2: '火车', 3: '地铁', 4: '汽车' },
    arriveList: [],
    // mapList: [],
    rumorList: [],
    collect: {}
  },
  reducers: {
    updateState(state, action) {
      return {
        ...state,
        ...action.payload
      };
    }
  },
  effects: {
    *getNews({ payload }, { call, put }) {
      const res = yield call(getNews, payload);
      if (res.code === 200) {
        yield put({
          type: 'updateState',
          payload: {
            desc: res.newslist[0]?.desc,
            news: res.newslist[0]?.news
          }
        })
      }
    },

    *getPlace({ payload }, { call, put }) {
      const res = yield call(getPlace, payload);
      if (res.code === 200) {
        yield put({
          type: 'updateState',
          payload: {
            placeList: res.newslist
          }
        })
      } else {
        message.error(res.msg);
      }
    },

    *getArrive({ payload }, { call, put }) {
      const res = yield call(getArrive, payload);
      if (res.code === 200) {
        yield put({
          type: 'updateState',
          payload: {
            arriveList: res.newslist
          }
        })
      } else {
        message.error(res.msg);
      }
    },

    *getMap({ payload }, { call, put }) {
      const res = yield call(getMap, payload);
      if (res.code === 200) {
        let data = res.newslist;
        data.forEach(item => {
          item['name'] = item.provinceName;
          item['value'] = item.currentConfirmedCount;
        });
        yield put({
          type: 'updateState',
          payload: {
            mapList: data
          }
        })
      } else {
        message.error(res.msg);
      }
    },

    *getRumor({ payload }, { call, put }) {
      const res = yield call(getRumor, payload);
      if (res.code === 200) {
        yield put({
          type: 'updateState',
          payload: {
            rumorList: res.newslist
          }
        })
      } else {
        message.error(res.msg);
      }
    },

    *getStatistic({ payload }, { call, put }) {
      const res = yield call(getStatistic, payload);
      if (res.code === '200') {
        yield put({
          type: 'updateState',
          payload: {
            collect: res.data
          }
        })
      } else {
        message.error(res.msg);
      }
    }
  }
}