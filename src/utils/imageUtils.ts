import { ImageType } from '../pages/DiaryDetail';

export const urlsToFiles = async (images: ImageType[]) => {
  const urls = images.map((image) => image.url);
  const filePromises = urls.map(async (url, index) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const mimeType = blob.type;
    return new File([blob], `image_${index + 1}.${mimeType.split('/')[1]}`, {
      type: mimeType,
    });
  });

  return Promise.all(filePromises);
};
