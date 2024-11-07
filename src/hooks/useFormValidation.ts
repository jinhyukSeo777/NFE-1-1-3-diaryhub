import { useEffect, useState } from 'react';

interface ValidationProps {
  weather: string;
  mood: string;
  images: File[];
  title: string;
  content: string;
}

const useFormValidation = ({
  weather,
  mood,
  images,
  title,
  content,
}: ValidationProps) => {
  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    const isFormValid =
      !!weather && !!mood && !!title && !!content && images.length > 0;
    setCanSubmit(isFormValid);
  }, [weather, mood, images, title, content]);

  return canSubmit;
};

export default useFormValidation;
