import React, { FC } from "react";
import { Recommendations } from "../types/recommendation";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import RecommendationCard from "./RecommendationCard";
import styles from "./../sass/_recommendation.module.scss";

const Recommendation: FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      id="testimonials"
      className={styles["testimonials"]}
    >
      <h1 className={styles["testimonials__heading"]}>Testimonials</h1>
      <Carousel className={styles["carousel"]}>
        {Recommendations.map((recommendation) => (
          <RecommendationCard props={recommendation} />
        ))}
      </Carousel>
    </motion.section>
  );
};

export default Recommendation;
