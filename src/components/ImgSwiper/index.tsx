import tape2 from '../../assets/tape2.svg';
import tape3 from '../../assets/tape3.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './styles.css';
import './sliderBtnStyle.css';
interface ImgSwiperProps {
  imgList: string[];
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
            <div className={S.slideItem}>
              <img className={S.slideImg} src={img} alt="img"></img>
            </div>
            <div className={S.slideTape}>
              <img src={tape3} className={S.slideTape1} alt="tape"></img>
              <img src={tape2} className={S.slideTape2} alt="tape"></img>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};
export default ImgSwiper;
