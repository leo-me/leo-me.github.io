import React, { useEffect } from 'react';
import Profile from './components/Profile';
import Cat from './components/cat';
import animation from './static/js/animation';
import styles from './index.less';

export default () => {
  useEffect(() => {
    animation();
  }, []);

  return (
    <div>
      <div id="panel">
        <canvas id="magic-dust"></canvas>
      </div>

      <div className={styles.top}>
        <Cat />
        <Profile />
      </div>
    </div>
  );
};
