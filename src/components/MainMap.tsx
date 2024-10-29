import { useState, useEffect } from 'react';
import * as styles from '../styles/MainMap.css';
import backImg from '../assets/markerBack.svg';
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
  const [map, setMap] = useState<any>();

  // 카카오맵 불러오기
  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(latitude, longitude),
        level: 3,
      };

      const newMap = new window.kakao.maps.Map(container, options);
      setMap(newMap);

      // 현재 위치를 가져오는 함수 호출
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          // 현재 위치(위도, 경도) 가져오기
          const currentPos = new window.kakao.maps.LatLng(
            pos.coords.latitude, // 위도
            pos.coords.longitude // 경도
          );

          // 지도를 현재 위치로 이동
          newMap.panTo(currentPos);

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
            const customOverlay = new window.kakao.maps.CustomOverlay({
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
  }, [markers, latitude, longitude]);

  return (
    <div>
      <div
        id="map"
        style={{ width: '100%', height: '650px', borderRadius: 20 }}
      ></div>
    </div>
  );
}
