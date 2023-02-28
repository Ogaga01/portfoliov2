import React, { FC } from 'react';
import { Recommendation } from '../types/types';
import styles from './../sass/_recommendationcard.module.scss'

interface Props {
    props: Recommendation
}

const RecommendationCard: FC<Props> = ({ props }) => {
    const {jd, name, recommendation, image} = props

    return (
      <div className={styles["article"]}>
        <p className={styles["article__recc"]}>{recommendation}</p>
        <div className={styles["article__author"]}>
          <div className={styles["article__author--img"]}>
            <img
              src={image}
              alt={name}
              className={styles["article__author--div"]}
            />
          </div>
          <div className={styles['article__author--info']}>
            <h1 className={styles["article__author--name"]}>{name} </h1>
            <p className={styles["article__author--jd"]}>{jd} </p>
          </div>
        </div>
      </div>
    );
};

export default RecommendationCard;