"use client"
import React, { useEffect, useState } from "react";
import styles from "../styles/card.module.css";
import Masonry from "react-masonry-css";
import { galleryData } from "../content";

function PostCard() {
  const [initialGamma, setInitialGamma] = useState(null);

  useEffect(() => {
    const handleOrientation = (event) => {
      if (initialGamma === null) {
        setInitialGamma(event.gamma || 0);
      }

      const gyroElements = document.querySelectorAll(".gyro-element");

      gyroElements.forEach((element) => {
        const scalingFactor = 0.4;
        const tiltX = (event.gamma || 0) - initialGamma;
        const tiltY = (event.beta || 1) * scalingFactor;
        element.style.transform = `rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
      });
    };

    window.addEventListener("deviceorientation", handleOrientation);

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, [initialGamma]);

  return (
    <Masonry
      breakpointCols={{ default: 4, 1100: 4, 700: 2, 500: 1 }}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {galleryData.map((images, index) => (
        <div className={`${styles.cardContainer} gyro-element`} key={index}>
          <div className={styles.cardImgContainer}>
            <div className={styles.imageWrapper}>
              <img
                src={images.src}
                alt={`image-${index}`}
                className={styles.image}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ))}
    </Masonry>
  );
}

export default PostCard;
