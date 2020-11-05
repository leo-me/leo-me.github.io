import React from 'react';
import Profile from './components/Profile'
import Content from './components/content';
import Cat from './components/cat';
import styles from './index.less';

export default () => {
  return (
    <div className={styles.home}>
      <div className={styles.top}>
        <Profile />
      </div>
      <div className={styles.bottom}>
        <Cat />
      </div>
    </div>
  );
}
