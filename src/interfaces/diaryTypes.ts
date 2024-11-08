export interface Comment {
  _id: string;
  user: {
    _id: string;
    username: string;
  };
  content: string;
  createdAt: string;
}

export interface Image {
  public_id: string;
  url: string;
  _id: string;
}

export interface Diary {
  _id: string;
  title: string;
  content: string;
  diaryDate: Date;
  user: {
    _id: string;
    username: string;
  };
  location: {
    state: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  mood: 'feel1' | 'feel2' | 'feel3' | 'feel4' | 'feel5';
  weather: 'sun' | 'cloud' | 'wind' | 'rain' | 'thunder';
  createdAt: Date;
  isPublic: boolean;
  images: Image[];
  likes: string[];
  comments: Comment[];
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface LocationOption {
  value: string;
  label: string;
  latitude?: number;
  longitude?: number;
}
