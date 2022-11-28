import * as React from 'react';
import * as styles from './drawer.module.css';
import anime from 'animejs';
import { useSelector } from 'react-redux';

export const Drawer = () => {
  const isDrawerOpen = useSelector(state => state.drawer.open);

  const ref = React.useRef(null);
  const animation = React.useRef(null);

  React.useEffect(() => {
    const timeline = anime.timeline({
      direction: 'normal',
      easing: 'easeInOutSine',
      duration: 250,
      autoplay: false,
      loop: false,
      targets: ref.current,
      translateX: '-100%',
    });

    timeline.add({
      translateX: 0,
    });

    animation.current = timeline;
  }, []);

  React.useEffect(() => {
    animation.current.play();
    animation.current.reverse();
  }, [isDrawerOpen]);

  return (
    <div ref={ref} className={styles.container}>
      Sidebar
    </div>
  );
};
