import { useEffect } from 'react';
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
  markers: { latitude: number; longitude: number; imageUrl: string }[];
}

export default function MainMap({ latitude, longitude, markers }: MapMarker) {
  // 카카오맵 불러오기
  useEffect(() => {
    window.kakao.maps.load(
      () => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
          level: 3,
        };

        const newMap = new window.kakao.maps.Map(container, options);

        // 마커 설정
        markers.forEach((markerData) => {
          const markerPosition = new window.kakao.maps.LatLng(
            markerData.latitude,
            markerData.longitude
          );

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
        });
      },
      () => alert('위치 정보를 가져오는데 실패했습니다.'),
      {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000,
      }
    );
  });

  return (
    <div
      id="map"
      style={{
        width: '100%',
        height: '100%',
        borderRadius: 20,
        position: 'absolute',
      }}
    ></div>
  );
}
