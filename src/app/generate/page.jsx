import { Grid } from "@mui/material";
import Slider from "../component/Slider";
import styles from "../page.module.css";
import { greenArrow } from "../content";
function Page() {
  return (
    <div>
      <Grid
        container
        alignItems="center"
        sx={{height:{xs:"60vh",md:"94vh"},justifyContent:{xs:"space-between",md:"space-around"}}}
      >
        <Grid item xs={11} lg={5.5}>
          <div className={styles.SecondPageContainer}>
            <h1>
              Choose Your Design
               
            </h1>
          </div>
        </Grid>
        <Grid item xs={11} lg={6}>
          <Slider />
        </Grid>
      </Grid>
    </div>
  );
}

export default Page;
