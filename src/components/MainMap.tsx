import React, { useState, useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function MainMap() {
  const [map, setMap] = useState<any>();
  const [marker, setMarker] = useState<any>();

  // 카카오맵 불러오기
  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      const newMap = new window.kakao.maps.Map(container, options);
      setMap(newMap);
      const newMarker = new window.kakao.maps.Marker();
      setMarker(newMarker);

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
          newMarker.setPosition(currentPos);
          newMarker.setMap(newMap);
        },
        () => alert('위치 정보를 가져오는데 실패했습니다.'),
        {
          enableHighAccuracy: true,
          maximumAge: 30000,
          timeout: 27000,
        }
      );
    });
  }, []);

  return (
    <div>
      <div
        id="map"
        style={{ width: '100%', height: '650px', borderRadius: 20 }}
      ></div>
    </div>
  );
}
