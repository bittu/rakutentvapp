import React, { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import 'shaka-player/dist/controls.css';
import shaka from 'shaka-player/dist/shaka-player.ui';
import Icon, { Icons } from '../components/Icon/Icon';

import classes from './pagestyles.module.scss'

const TrailerPage = () => {
  const { id } = useParams()
  const containerRef = useRef();
  const videoRef = useRef();

  useEffect(() => {
    const player = new shaka.Player(videoRef.current);
    const ui = new shaka.ui.Overlay(player, containerRef.current, videoRef.current);

    player.configure({
      drm: {
        servers: {
          'com.widevine.alpha': 'https://widevine-proxy.appspot.com/proxy'
        }
      }
    });
    player.load('https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/mpds/11331.mpd');

    return () => {
      player.destroy();
      ui.destroy();
    };
  }, []);

  return (
    <div className={classes.trailer}>
      <Helmet>
        <style>
          {`#root {
            padding-top: 0
          }`}
        </style>
      </Helmet>
      <Link to={`/movie/${id}`} className={classes.backLink}>
        <Icon use={Icons.LEFT_ARROW} className={classes.backIcon} />
        <span className={classes.tipLabel}>Detail page</span>
      </Link>
      <div ref={containerRef} className={classes.videoContainer}>
        <video ref={videoRef} />
      </div>
    </div>
  )
}

export default TrailerPage