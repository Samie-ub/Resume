
import React from "react";
import { Grid } from "@mui/material";
import PostCard from "../component/PostCard";
import styles from "../styles/slider.module.css";

function Page() {
  return (
    <div>
      <div className="white-space"></div>
      <Grid
        container
        alignItems="center"
      >
        <Grid item xs={11} lg={12}> <PostCard />;
        </Grid>
      </Grid>
    </div>
  );
}

export default Page;
