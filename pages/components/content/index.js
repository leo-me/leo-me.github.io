import React from 'react';
import styles from './index.less';

export default () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>
      闭包
      </h1>
      <h2>概念
        <ol>1.一个包含数据的函数，以环境的形式包含数据</ol>
        <ol>2.包含数据的方式：作用域链</ol>
        <ol>3.函数：一般的函数，作用域链运行完就销毁，闭包对变量还有引用，作用域链不会销毁</ol>
      </h2>
      <div>
        markdown
        ```
        #jest单元测试，如
        yarn test packages/fnUtils/__tests__/data.test.js
        ```
        ## 开发约定
      </div>
    </div>
  );
}
