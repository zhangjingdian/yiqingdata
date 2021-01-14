import React, { Suspense } from 'react';
import { connect } from 'dva';
import styles from './index.less';
const Information = React.lazy(() => import('./information'));
const Place = React.lazy(() => import('./place'));
const Arrive = React.lazy(() => import('./arrive'));
const Map = React.lazy(() => import('./map'));
const Rumor = React.lazy(() => import('./rumor'));
const Statistics = React.lazy(() => import('./statistics'));
function Home({ common }) {
  const current = common.current;
  return (
    <div className={styles['wrap']}>
      <Suspense fallback={<div></div>}>
        {current === '1' ? <Information /> : null}
        {current === '2' ? <Place /> : null}
        {current === '3' ? <Arrive /> : null}
        {current === '4' ? <Map /> : null}
        {current === '5' ? <Rumor /> : null}
        {current === '6' ? <Statistics /> : null}
      </Suspense>
    </div>
  )
}
export default connect(({ common, Home }) => ({ common, Home }))(Home);