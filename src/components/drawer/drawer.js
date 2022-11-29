import * as React from 'react';
import * as styles from './drawer.module.css';
import anime from 'animejs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'gatsby';
import { toggle } from '../../state/drawer-reducer';

export const Drawer = () => {
  const isDrawerOpen = useSelector(state => state.drawer.open);

  const ref = React.useRef(null);
  const animation = React.useRef(null);

  React.useEffect(() => {
    const timeline = anime.timeline({
      direction: 'normal',
      easing: 'easeInOutSine',
      duration: 500,
      autoplay: false,
      loop: false,
      targets: ref.current,
      translateX: '-100%',
    });

    timeline.add({
      translateX: 0,
    });

    animation.current = timeline;

    animation.current.reverse();
    animation.current.play();
  }, []);

  React.useEffect(() => {
    animation.current.reverse();
    animation.current.play();
  }, [isDrawerOpen]);

  return (
    <div ref={ref} className={styles.container}>
      <Link to='/code-academy' className={styles.linkItem} activeClassName={styles.active}>
        Code Academy
      </Link>
    </div>
  );
};

export const DrawerToggle = () => {
  const dispatch = useDispatch();

  const ref = React.useRef(null);
  const animation = React.useRef(null);

  React.useEffect(() => {
    const timeline = anime.timeline({
      direction: 'normal',
      easing: 'easeInOutSine',
      duration: 100,
      autoplay: false,
      loop: false,
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

    animation.current.reverse();
    animation.current.play();
  }, []);

  const handleClick = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();

    animation.current.play();
    dispatch(toggle());
    animation.current.reverse();
  };

  return (
    <button className={styles.toggle} ref={ref} onClick={handleClick}>
      <div className={styles.block} />
      <div className={styles.block} />
      <div className={styles.block} />
    </button>
  )
};
