import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './MainMap.css';
import backImg from '../../assets/markerBack.svg';
declare global {
  interface Window {
    kakao: any;
  }
}
interface MapMarker {
  latitude: number;
  longitude: number;
  markers: {
    latitude: number;
    longitude: number;
    imageUrl: string;
    id: string;
  }[];
}

export default function MainMap({ latitude, longitude, markers }: MapMarker) {
  const navigate = useNavigate();

  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(latitude, longitude),
        level: 5,
      };

      const newMap = new window.kakao.maps.Map(container, options);

      if (markers.length > 0) {
        const bounds = new window.kakao.maps.LatLngBounds();

        // 마커 설정
        markers.forEach((markerData) => {
          const markerPosition = new window.kakao.maps.LatLng(
            markerData.latitude,
            markerData.longitude
          );

          bounds.extend(markerPosition);

          // 마커를 담을 div 생성
          const markerDiv = document.createElement('div');
          markerDiv.style.backgroundImage = `url(${backImg})`;
          markerDiv.classList.add(styles.markerDiv);

          // 커스텀 마커 이미지
          const img = document.createElement('img');
          img.src = markerData.imageUrl;
          img.classList.add(styles.markerImg);

          // 마커 div에 이미지 추가
          markerDiv.appendChild(img);

          // CustomOverlay 생성
          new window.kakao.maps.CustomOverlay({
            position: markerPosition,
            content: markerDiv,
            map: newMap,
          });

          // 마커 클릭 이벤트 추가
          markerDiv.onclick = () => {
            navigate(`/diarydetail/${markerData.id}`); // 해당 일기 상세 페이지로 이동
          };
        });
        newMap.setBounds(bounds);
      } else {
        newMap.setCenter(new window.kakao.maps.LatLng(latitude, longitude));
      }
    });
  }, [latitude, longitude, markers, navigate]);

  return (
    <div
      id="map"
      style={{
        width: '100%',
        height: '90%',
        borderRadius: '0.5rem',
        position: 'absolute',
      }}
    ></div>
  );
}
