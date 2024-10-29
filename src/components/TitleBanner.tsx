import React from 'react';
import {
  bannerContainer,
  titleStyle,
  subtitleStyle,
  imageStyle,
} from './TitleBanner.css';
import tapeImage from '../assets/tape3.svg'; // 기본 이미지 import

type TitleBannerProps = {
  title: string;
  subtitle: string;
};

const TitleBanner: React.FC<TitleBannerProps> = ({ title, subtitle }) => {
  return (
    <div className={bannerContainer}>
      <img src={tapeImage} alt="banner img" className={imageStyle} />
      <h1 className={titleStyle}>{title}</h1>
      <p className={subtitleStyle}>{subtitle}</p>
    </div>
  );
};

export default TitleBanner;
