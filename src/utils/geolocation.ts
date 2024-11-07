import { getRegionName } from './regionService';

interface Coordinates {
  latitude: number;
  longitude: number;
}

export const fetchGeolocation = async (
  onSuccess: (position: Coordinates, region: string) => void,
  onError: () => void
) => {
  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      const { latitude, longitude } = pos.coords;
      const region = await getRegionName({ latitude, longitude });
      onSuccess({ latitude, longitude }, region);
    },
    onError,
    {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 27000,
    }
  );
};
