import palmTree from '../../assets/Palm-Tree.svg';
import turtle from '../../assets/Turtle.svg';

import styles from './login-turtle-scene.module.css';

export function LoginTurtleScene() {
  return (
    <div aria-hidden="true" className={styles['login-turtle-scene']}>
      <img
        alt=""
        className={styles['login-turtle-scene-tree']}
        height={245}
        src={palmTree}
        width={207}
      />
      <img
        alt=""
        className={styles['login-turtle-scene-turtle']}
        height={260}
        src={turtle}
        width={260}
      />
    </div>
  );
}
