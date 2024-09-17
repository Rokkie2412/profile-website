import React from 'react';
import { TfiMouse } from "react-icons/tfi";

import { loadImages } from './certification.utils';
import styles from './ceritification.module.css'

const Experience = (certif: string) => {
  const images = import.meta.glob('/src/assets/certification/*.{jpg,png,jpeg,gif}');
  const [imageUrls, setImageUrls] = React.useState<string[]>([]);

  React.useEffect(() => {
    // @ts-expect-error - cannot find best type for images meta.glob
    loadImages(images, setImageUrls);
  }, [images]);
  
  return (
    <div id={certif} className={styles['main-container']}>
      <h1 className={styles.title}>CERTIFICATION</h1>
      <p className={`${styles.subtitle} ${styles.hint1}`}>Scroll to view more <TfiMouse className={`${styles['subtitle-icon']} ${styles.bounce}`}/></p>
      <p className={`${styles.subtitle} ${styles.hint2}`}>Slide to view more <TfiMouse className={`${styles['subtitle-icon']} ${styles.swing}`}/></p>
      <div className={styles['certification-container']}>
        {imageUrls.map((url, index) => (
          <img className={styles.image} key={index} src={url} alt={`image-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
