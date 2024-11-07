export interface Comment {
  _id: string;
  user: {
    _id: string;
    username: string;
  };
  content: string;
  createdAt: Date;
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
  mood: string;
  weather: string;
  createdAt: Date;
  isPublic: boolean;
  images: Image[];
  likes: string[];
  comments: Comment[];
}

export interface Position {
  latitude: number;
  longitude: number;
}
