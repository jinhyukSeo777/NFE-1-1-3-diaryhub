import { slide, imgItem } from './styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './sliderBtnStyle.css';
interface ImgSwiperProps {
  imgList: string[];
}
const ImgSwiper = ({ imgList }: ImgSwiperProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {imgList.map((img, index) => {
        return (
          <div className={slide}>
            <img className={imgItem} src={img} alt="img"></img>
          </div>
        );
      })}
    </Slider>
  );
};
export default ImgSwiper;
