import React from 'react';
import MenuSection from './MenuSection';
import styles from '../styles/App.module.css';

const Menu = ({ dishes }) => {
  const forretter = dishes.filter(dish => dish.kategori === "Forrett");
  const hovedretter = dishes.filter(dish => dish.kategori === "Hovedrett");
  const desserter = dishes.filter(dish => dish.kategori === "Dessert");

  return (
    <div className={styles.menuContainer}>
      <MenuSection title="Forretter" dishes={forretter} icon="🥗" />
      <MenuSection title="Hovedretter" dishes={hovedretter} icon="🍝" />
      <MenuSection title="Desserter" dishes={desserter} icon="🍰" />
    </div>
  );
};

export default Menu;