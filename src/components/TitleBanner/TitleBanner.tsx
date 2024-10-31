import React from 'react';
import {
  bannerContainer,
  titleStyle,
  subtitleStyle,
  imageStyle,
  imgWrap,
} from './TitleBanner.css';
import tapeImage from '../../assets/titleTape.svg';

type TitleBannerProps = {
  title: string;
  subtitle: string;
};

const TitleBanner: React.FC<TitleBannerProps> = ({ title, subtitle }) => {
  return (
    <div className={bannerContainer}>
      <div className={imgWrap}>
        <img src={tapeImage} alt="banner img" className={imageStyle} />
        <h2 className={titleStyle}>{title}</h2>
      </div>
      <p className={subtitleStyle}>{subtitle}</p>
    </div>
  );
};

export default TitleBanner;
