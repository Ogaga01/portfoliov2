import React, { FC } from "react";
import { Recommendations } from "../types/recommendation";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import RecommendationCard from "./RecommendationCard";
import styles from './../sass/_recommendation.module.scss'

const Recommendation: FC = () => {
    return (
      // <Fade bottom>
        <section id="testimonials" className={styles["testimonials"]}>
          <h1 className={styles["testimonials__heading"]}>Testimonials</h1>
          <Carousel>
            {Recommendations.map((recommendation) => (
              <RecommendationCard props={recommendation} />
            ))}
          </Carousel>
        </section>
      // </Fade>
    );
};

export default Recommendation;
