import React from 'react';
import Dish from './Dish';
import styles from '../styles/App.module.css';

const MenuSection = ({ title, dishes, icon }) => {
  return (
    <section className={styles.menuSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionIcon}>{icon}</span>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
      <div className={styles.menuGrid}>
        {dishes.map((dish) => (
          <Dish
            key={dish.id}
            tittel={dish.tittel}
            pris={dish.pris}
            ingredienser={dish.ingredienser}
            kategori={dish.kategori}
            bilde={dish.bilde}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;