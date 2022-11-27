import * as React from 'react';
import * as styles from './drawer.module.css';
import anime from 'animejs';
import { useSelector } from 'react-redux';

export const Drawer = () => {
  const isDrawerOpen = useSelector(state => state.drawer.open);

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
    !isDrawerOpen ? animation.current.play() : animation.current.reverse();
  }, [isDrawerOpen]);

  return (
    <div id='drawer' className={styles.container}>
      Sidebar
    </div>
  );
};
