import React from 'react';
import styles from '../styles/App.module.css';

const Dish = ({ tittel, pris, ingredienser, kategori, bilde }) => {
  return (
    <div className={styles.dishCard}>
      <div className={styles.dishImageContainer}>
        <img src={bilde} alt={tittel} className={styles.dishImage} />
        <div className={styles.categoryBadge}>{kategori}</div>
      </div>
      <div className={styles.dishContent}>
        <h3 className={styles.dishTitle}>{tittel}</h3>
        <p className={styles.dishPrice}>{pris}</p>
        <div className={styles.ingredientsSection}>
          <p className={styles.ingredientsText}>{ingredienser}</p>
        </div>
      </div>
    </div>
  );
};

export default Dish;