"use client";
import React from "react";
import { Grid } from "@mui/material";
import PostCard from "../component/PostCard";

function Page() {
  return (
    <div>
      <Grid
        container
        alignItems="center"
        sx={{
          height: { xs: "60vh", md: "94vh" },
          justifyContent: { xs: "space-between", md: "space-around" },
        }}
      >
        <Grid item xs={11} lg={12}>
          <PostCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default Page;
