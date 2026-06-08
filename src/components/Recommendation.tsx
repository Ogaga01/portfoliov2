import React, { FC } from "react";
import { motion } from "framer-motion";
import { Recommendations } from "../types/recommendation";
import RecommendationCard from "./RecommendationCard";

const Recommendation: FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="testimonials"
      className="section-shell"
    >
      <p className="eyebrow">Testimonials</p>
      <h2 className="section-title">What collaborators say</h2>
      <p className="section-copy">
        Feedback from developers who have worked with me in remote and collaborative settings.
      </p>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {Recommendations.map((recommendation) => (
          <RecommendationCard key={recommendation.name} recommendation={recommendation} />
        ))}
      </div>
    </motion.section>
  );
};

export default Recommendation;
