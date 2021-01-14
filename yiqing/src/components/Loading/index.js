import { Spin } from 'antd';
import styles from './index.less';
function Loading() {
  return (
    <div className={styles['loading']}>
      <Spin size="large" tip="Loading..." />
    </div>
  );
}

export default Loading;
