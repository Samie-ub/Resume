import Link from "next/link";
import styles from "./page.module.css";
import { Grid } from "@mui/material";

export default function Home() {
  return (
    <Grid container justifyContent={"space-between"}>
      <Grid item lg={7}>
        <main className={styles.main}>
          <h1>generate your cv NOW for free <img width="10" height="10" src="https://img.icons8.com/material-sharp/24/14a800/filled-circle.png" alt="filled-circle"/></h1>
          <div>
          <Link href={"generate"}>
          
          <button className="home-btn">generate</button>
          </Link>
          
          </div>
        </main>
      </Grid>
      <Grid item lg={4.9}>
        <Grid container gap={2}>
          <Grid item lg={12}>
            <div className={styles.subMain}>
              <h1>Get free tools right here <img width="10" height="10" src="https://img.icons8.com/material-sharp/24/14a800/filled-circle.png" alt="filled-circle"/></h1>
              <button className="home-btn">Free tools</button>
            </div>
          </Grid>
          <Grid item lg={12}>
            <div className={styles.subMainThird}>
              <div>
                 
              <h1>Want to contribute.</h1>
              <p>Let collebrate to take this project to next level.</p>
              </div>
              <div>

              <a href="/"><img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/github--v1.png" alt="github--v1"/></a>
              <a href="/"><img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/linkedin-circled--v1.png" alt="linkedin-circled--v1"/></a>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
