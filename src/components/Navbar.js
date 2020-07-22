/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import styles from '../assets/styles/Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <h1 className={styles.logo}>Worthy Work</h1>
    <div className={styles.credit}>
      Powered by
      <a href="https://reliefweb.int/" target="_blank">
        <div className={styles['rw-logo']} />
      </a>
    </div>
  </nav>
);

export default Navbar;
