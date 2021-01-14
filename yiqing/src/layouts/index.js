import { ConfigProvider, Avatar } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import WrapLayout from './wrapLayout';
import styles from './index.css';
import Loading from '../components/Loading'
import { connect } from 'dva';
moment.locale('zh-cn');
function BasicLayout({ children, loading }) {
  return (
    <ConfigProvider locale={zhCN}>
      <div style={{ height: '100%' }}>
        <div className={styles['base-layout']}>
          <Avatar size={100} src={require('../assets/logo.jpg')} />
          <span className={styles['title']}>抗疫数据</span>
        </div>
        <div className={styles['wrap']}>
          <div className={styles['side']}>
            <WrapLayout />
          </div>
          <div className={styles['content']}>
            {children}
          </div>
        </div>
      </div>
      {loading.global && <Loading />}
    </ConfigProvider>
  );
}

export default connect(({ loading }) => ({ loading }))(BasicLayout);
