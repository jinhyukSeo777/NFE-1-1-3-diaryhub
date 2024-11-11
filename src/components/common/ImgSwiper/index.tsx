import { Image } from '@interfaces/diaryTypes';
import tape2 from '@assets/icons/tape2.svg';
import tape3 from '@assets/icons/tape3.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './styles.css';
import './sliderBtnStyle.css';

interface ImgSwiperProps {
  imgList: Image[];
}

const ImgSwiper = ({ imgList }: ImgSwiperProps) => {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: imgList.length > 1 ? true : false,
    arrows: imgList.length > 1 ? true : false,
    dots: imgList.length > 1 ? true : false,
  };
  return (
    <Slider {...settings}>
      {imgList.map((img, index) => {
        return (
          <div className={S.slide} key={index}>
            <div className={S.div}>
              <img className={S.img} src={img.url} alt="img"></img>
            </div>
            <div className={S.cover}>
              <img src={tape3} className={S.tape1} alt="tape"></img>
              <img src={tape2} className={S.tape2} alt="tape"></img>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};
export default ImgSwiper;
