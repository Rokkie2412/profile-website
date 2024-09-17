import type { Image, Setter } from '../../types'

export const loadImages = async (images: Image, setImage: Setter<string[]>): Promise<void> => {
  const loadedImages = await Promise.all(
    Object.keys(images).map(async (key) => {
      const module = await images[key]();
      if (typeof module.default === 'string') {
        return module.default;
      } else {
        throw new Error('Unexpected type encountered.');
      }
    })
  );
  setImage(loadedImages);
};
