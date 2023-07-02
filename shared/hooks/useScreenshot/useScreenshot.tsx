import { type MutableRefObject, useEffect, useRef } from 'react';
import { useScreenshot as useScreenshotHook, createFileName } from 'use-react-screenshot';

interface UseScreenshot {
  getImage: () => void;
  screenshotRef: MutableRefObject<HTMLElement | null>;
}

const useScreenshot = (): UseScreenshot => {
  const screenshotRef = useRef<HTMLElement | null>(null);
  const [image, takeScreenShot] = useScreenshotHook();

  const download = (image: string, { name = 'img', extension = 'png' } = {}): void => {
    const a = document.createElement('a');
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const getImage = (): void => takeScreenShot(screenshotRef.current);

  useEffect(() => {
    // eslint-disable-next-line no-extra-boolean-cast
    if (Boolean(image)) {
      download(image, { name: 'chart', extension: 'png' });
    }
  }, [image]);

  return { getImage, screenshotRef };
};

export { useScreenshot };
