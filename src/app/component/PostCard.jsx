import React from "react";
import styles from "../styles/card.module.css";
import { Grid } from "@mui/material";

function PostCard() {
  return (
    <Grid container justifyContent={"space-around"}>
      <Grid item lg={3}>
        <div className={styles.cardContainer}>
          <div className={styles.cardImgContainer}>
            <img
              src="https://img.freepik.com/free-vector/gray-3d-icosahedron-black-background-vector_53876-168031.jpg?w=740&t=st=1700943588~exp=1700944188~hmac=01f55ba54ebd18804f91a4593d31d70e4df64319df4b501b37b295d6e86ce3bc"
              alt="random image"
            />
            <div className={styles.iconsContainer}>
                <div className={styles.afterContent}>
                    
              <div className={styles.ProfileContainer}>
                <img
                  src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1700943023~exp=1700943623~hmac=06752fb0776d73cc810c7d75f687f882d9e6faabb52ac99545ca2a111764f464"
                  alt="dummy"
                  />
                <span>samie</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default PostCard;
