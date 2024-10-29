import { useState } from 'react';
import * as styles from './CreateMap.css';
import { Map } from 'react-kakao-maps-sdk';
import { IPosition } from '../../pages/CreateDiary/CreateDiary';

interface IProps {
  position: IPosition;
  setPosition: React.Dispatch<React.SetStateAction<IPosition>>;
}

const CreateMap = ({ position, setPosition }: IProps) => {
  const [map, setMap] = useState<any>();

  const handleCenterChanged = () => {
    if (map) {
      const center = map.getCenter(); // 지도 중심 좌표 가져오기
      setPosition({ lat: center.Ma, lng: center.La });
    }
  };

  return (
    <div className={styles.container}>
      <Map
        center={position}
        style={{
          width: '100%',
          height: '100%',
        }}
        level={3}
        onCreate={setMap}
        onCenterChanged={handleCenterChanged}
      ></Map>
      <div className={styles.centericon}>🚩</div>
    </div>
  );
};

export default CreateMap;
