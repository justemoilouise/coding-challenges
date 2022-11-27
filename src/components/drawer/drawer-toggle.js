import * as React from 'react';
import * as styles from './drawer-toggle.module.css';
import anime from 'animejs';
import { useDrawer } from '../../context/drawer-context';

export const DrawerToggle = () => {
  const drawerContext = useDrawer();
  const animation = React.useRef(null);

  React.useLayoutEffect(() => {
    animation.current = anime.timeline({
      direction: 'normal',
      easing: 'easeInOutSine',
      duration: 150,
      autoplay: false,
    });

    animation.current
      .add({
        targets: '#drawer-toggle-block-1',
        translateY: 7,
      })
      .add({
        targets: '#drawer-toggle-block-3',
        translateY: -7,
      }, '-=100')
      .add({
        targets: ['#drawer-toggle-block-1', '#drawer-toggle-block-3'],
        rotate: '45deg',
      })
      .add({
        targets: '#drawer-toggle-block-2',
        rotate: '-45deg',
      });
  }, []);

  React.useEffect(() => {
    drawerContext.open ? animation.current.play() : animation.current.reverse();
  });

  return (
    <button className={styles.container} onClick={drawerContext.toggle}>
      <div className={styles.block} id='drawer-toggle-block-1' />
      <div className={styles.block} id='drawer-toggle-block-2' />
      <div className={styles.block} id='drawer-toggle-block-3' />
    </button>
  )
};

