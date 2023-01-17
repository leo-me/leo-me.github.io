import React from 'react';
import Cat from '../cat';
import styles from './index.less';

export default () => {
  return (
    <div className={styles.blog}>
      <div className={styles.brief}>
        <div className={styles.name}>leo</div>
        <div className={styles.infocContainer}>
          <div
            className={styles.githubPage}
            onClick={() =>
              (document.location = 'https://github.com/leo-me/javaScript-basic')
            }
          >
            <svg
              t="1594976439667"
              className={styles.icon}
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2398"
              width="16"
              height="16"
            >
              <path
                d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512z m0-992a480 480 0 1 0 480 480A480 480 0 0 0 512 32z m224.256 512h-32v192a32 32 0 0 1-32 32h-320a32 32 0 0 1-32-32V544h-32a32 32 0 0 1-32-32h-0.608a14.704 14.704 0 0 1 1.6-4.592 31.184 31.184 0 0 1 24-25.968L504 258.96a9.6 9.6 0 0 1 15.44 0l222.688 222.224A31.552 31.552 0 0 1 768.256 512a32 32 0 0 1-32 32zM512 294.496L295.008 512H352v224h320V512h57.008zM320.128 576h0.128-0.128z"
                p-id="2399"
                fill="#ffffff"
              ></path>
            </svg>
            <a className={styles.basicLink}>Home Page</a>
          </div>
          <div className={styles.contact}>
            email:
            <span className={styles.address}>leo.me0602@gmail.com</span>
          </div>
        </div>
        <ul className={styles.label}>
          <li>front-end engineer</li>
          <li>full stack development</li>
          <li>like to delve into technology</li>
          <li>love design.architecture.painting.book</li>
          <li>cats</li>
        </ul>
      </div>
      <div className={styles.words}>
        The "self" thing is invisible. When you bump into something else and
        bounce back, you will understand "self". So, collide with very strong
        things, terrible things, and high-level things, and then only know what
        "self" is.
        <div className={styles.author}>- Yamamoto Yaosi</div>
      </div>
    </div>
  );
};
