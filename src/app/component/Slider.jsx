"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import styles from "../slider.module.css";
import Link from "next/link";
function Slider() {
  return (
    <div>
      <Swiper
         modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={2}
        navigation={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        
      >
        <SwiperSlide>
          <Link href={'/cv-1'}>

          <img
            className={styles.sliderImage}
            src="https://marketplace.canva.com/EAE8mhdnw_g/2/0/1131w/canva-grey-clean-cv-resume-photo-pIsBixsev8I.jpg"
            alt=""
            />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={styles.sliderImage}
            src="https://gosumo-cvtemplate.com/wp-content/uploads/2019/06/Word-CV-Template-Dublin.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={styles.sliderImage}
            src="https://img.freepik.com/free-psd/clean-modern-resume-portfolio-cv-template_120329-3607.jpg?size=626&ext=jpg&ga=GA1.1.1124165788.1700413761&semt=ais"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={styles.sliderImage}
            src="https://img.freepik.com/free-vector/minimalist-cv-template_23-2148916161.jpg?size=626&ext=jpg&ga=GA1.1.1124165788.1700413761&semt=ais"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
