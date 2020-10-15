import React from 'react';
import Profile from './components/Profile'
import Content from './components/content';
import styles from './index.less';

export default () => {
  return (
    <div className={styles.home}>
      <Profile />
      <Content />
    </div>
  );
}
