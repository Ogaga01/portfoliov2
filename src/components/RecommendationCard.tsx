import React, { FC } from "react";
import { Recommendation } from "../types/types";

interface Props {
  recommendation: Recommendation;
}

const RecommendationCard: FC<Props> = ({ recommendation }) => {
  const { jd, name, recommendation: quote, image } = recommendation;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
      <p className="text-base leading-7 text-slate-600 dark:text-slate-300">"{quote}"</p>
      <div className="mt-8 flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="h-12 w-12 rounded-full object-cover ring-2 ring-cyan-100 dark:ring-cyan-300/20"
          loading="lazy"
        />
        <div>
          <h3 className="font-bold text-slate-950 dark:text-white">{name}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">{jd}</p>
        </div>
      </div>
    </article>
  );
};

export default RecommendationCard;
