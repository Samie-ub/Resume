"use client"

import React, { useEffect, useState } from "react";
import styles from "../styles/card.module.css";
import { Grid } from "@mui/material";
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
        const tiltX = (event.gamma || 0) - initialGamma; // Adjusted tilt left-to-right (in degrees)
        const tiltY = event.beta || 0; // Tilt front-to-back (in degrees)

        // Apply the gyro effect to each image element
        element.style.transform = `rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
      });
    };

    window.addEventListener("deviceorientation", handleOrientation);

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, [initialGamma]);

  return (
    <div>
      <Grid container justifyContent={"center"} gap={2} mt={10}>
        {galleryData.map((images, index) => (
          <Grid item xs={12} lg={3.5} key={index}>
            <div className={`${styles.cardContainer} gyro-element`}>
              <div className={styles.cardImgContainer}>
                <img src={images.src} alt={`image-${index}`} />
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
      <div className={styles}></div>
    </div>
  );
}

export default PostCard;
