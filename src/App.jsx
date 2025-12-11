import React from 'react';
import Menu from './components/Menu';
import meny from './data/menuData';
import styles from './styles/App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.mainTitle}>Grunerløkka Kjøkken</h1>
          <p className={styles.subtitle}>En smaksopplevelse utenom det vanlige - i hjertet av Oslo</p>
        </div>
      </header>
      <Menu dishes={meny} />
    </div>
  );
}

export default App;