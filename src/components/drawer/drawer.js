import * as React from 'react';
import * as styles from './drawer.module.css';
import anime from 'animejs';
import { useDrawer } from '../../context/drawer-context';

export const Drawer = () => {
  const drawerContext = useDrawer();
  const animation = React.useRef(null);

  React.useLayoutEffect(() => {
    animation.current = anime.timeline({
      direction: 'normal',
      easing: 'easeInOutSine',
      duration: 250,
      autoplay: false,
    });

    animation.current.add({
      targets: '#drawer',
      translateX: '-100%',
    });
  }, []);

  React.useEffect(() => {
    !drawerContext.open ? animation.current.play() : animation.current.reverse();
  });

  return (
    <div id='drawer' className={styles.container}>
      Sidebar
    </div>
  );
};
