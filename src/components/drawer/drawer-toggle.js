import * as React from 'react';
import * as styles from './drawer-toggle.module.css';
import anime from 'animejs';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../state/drawer-reducer';

export const DrawerToggle = () => {
  const isDrawerOpen = useSelector(state => state.drawer.open);
  const dispatch = useDispatch();

  const ref = React.useRef(null);
  const animation = React.useRef(null);

  React.useEffect(() => {
    const timeline = anime.timeline({
      direction: 'normal',
      easing: 'easeInOutSine',
      delay: 0,
      duration: 150,
      autoplay: false,
    });

    timeline
      .add({
        targets: ref.current.children[0],
        translateY: 7,
      })
      .add({
        targets: ref.current.children[2],
        translateY: -7,
      }, '-=100')
      .add({
        targets: [ref.current.children[0], ref.current.children[2]],
        rotate: '45deg',
      })
      .add({
        targets: ref.current.children[1],
        rotate: '-45deg',
      });
    
    animation.current = timeline;
  }, []);

  const handleClick = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();

    isDrawerOpen ? animation.current.play() : animation.current.reverse();
    dispatch(toggle());
  };

  return (
    <button className={styles.container} ref={ref} onClick={handleClick}>
      <div className={styles.block} />
      <div className={styles.block} />
      <div className={styles.block} />
    </button>
  )
};
