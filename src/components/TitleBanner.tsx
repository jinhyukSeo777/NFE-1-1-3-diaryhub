import React from 'react';
import {
  bannerContainer,
  titleStyle,
  subtitleStyle,
  imageStyle,
} from './TitleBanner.css';

type TitleBannerProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
};

const TitleBanner: React.FC<TitleBannerProps> = ({
  title,
  subtitle,
  imageUrl,
}) => {
  return (
    <div className={bannerContainer}>
      <img src="../assets/tape1.svg" alt="banner img" className={imageStyle} />
      <h1 className={titleStyle}>{title}</h1>
      <p className={subtitleStyle}>{subtitle}</p>
    </div>
  );
};

export default TitleBanner;
