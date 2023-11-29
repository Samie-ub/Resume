"use client"
import React, { useState } from "react";
import { Grid } from "@mui/material";
import PostCard from "../component/PostCard";
import AddBtn from "../component/AddBtn";
import AddModal from "../component/AddModal";

function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddBtnClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="white-space"></div>
      <Grid container justifyContent={"center"} alignItems="center">
        <Grid item xs={11} lg={12} mt={10}>
          <PostCard />
        </Grid>
      </Grid>
      <AddBtn onClick={handleAddBtnClick} />
      {isModalOpen && <AddModal onClose={handleCloseModal} />}
    </div>
  );
}

export default Page;