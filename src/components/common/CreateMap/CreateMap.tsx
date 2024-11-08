import { useState } from 'react';
import * as styles from './CreateMap.css';
import { Map } from 'react-kakao-maps-sdk';
import { Coordinates } from '@interfaces/diaryTypes';
import { getRegionName } from '@utils/regionService';

interface IProps {
  position: Coordinates;
  setPosition: React.Dispatch<React.SetStateAction<Coordinates>>;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
}

const CreateMap = ({ position, setPosition, setRegion }: IProps) => {
  const [map, setMap] = useState<any>();

  // 지도 위치 변경 시 호출
  const handleCenterChanged = () => {
    if (map) {
      const center = map.getCenter(); // 지도 중심 좌표 가져오기
      setPosition({ latitude: center.Ma, longitude: center.La });
    }
  };

  const handleDragEnd = async () => {
    const region = await getRegionName(position);
    setRegion(region);
  };

  return (
    <div className={styles.container}>
      <Map
        center={{ lat: position.latitude, lng: position.longitude }}
        style={{
          width: '100%',
          height: '100%',
        }}
        level={3}
        onCreate={setMap}
        onCenterChanged={handleCenterChanged}
        onDragEnd={handleDragEnd}
      ></Map>
      <div className={styles.centericon}>🚩</div>
    </div>
  );
};

export default CreateMap;
