import Link from "next/link";
import styles from "./styles/page.module.css";
import { Grid } from "@mui/material";
import {
  DataFreeToolContainer,
  DataGenerateContainer,
  contributionData,
  socialLinkData,
} from "./content";

export default function Home() {
  return (
    <Grid
      container
      justifyContent={"space-between"}
      sx={{ gap: { xs: 2, md: 0 } }}
    >
      <Grid item xs={12} md={6} lg={7}>
        {DataGenerateContainer.map((content, index) => {
          return (
            <main className={styles.main} key={index}>
              <div className={styles.overlay}>
                <h1>
                  {content.content}
                  <img
                    width={content.width}
                    height={content.height}
                    src={content.imgHref}
                    alt="filled-circle"
                  />
                </h1>
                <div>
                  <Link href={"generate"}>
                    <button className="home-btn">{content.btnText}</button>
                  </Link>
                </div>
              </div>
            </main>
          );  
        })}
      </Grid>
      <Grid item xs={12} md={5.8} lg={4.9}>
        <Grid container gap={2}>
          <Grid item xs={12} md={12} lg={12}>
            {DataFreeToolContainer.map((content, index) => {
              return (
                <div className={styles.subMain} key={index}>
                  <h1>
                    {content.content}
                    <img
                      width="10"
                      height="10"
                      src={content.imgHref}
                      alt={content.alt}
                    />
                  </h1>
                  <a
                    href="https://devuse.vercel.app/"
                    target="_blank"
                    className="home-btn"
                  >
                    {content.btnText}
                  </a>
                </div>
              );
            })}
          </Grid>
          <Grid item xs={12} lg={12}>
            <div className={styles.subMainThird}>
              {contributionData.map((content, index) => {
                return (
                  <div key={index}>
                    <h1>{content.title}</h1>
                    <p>{content.paragraph}</p>
                  </div>
                );
              })}
              <div>
                {socialLinkData.map((content, index) => {
                  return (
                    <a
                      href={content.link}
                      target="_blank"
                      rel="norefer"
                      key={index}
                    >
                      <img
                        width="50"
                        height="50"
                        src={content.imgHref}
                        alt={content.alt}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
