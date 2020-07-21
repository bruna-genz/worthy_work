/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import styles from '../assets/styles/Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <h1 className={styles.logo}>
      <BrowserRouter>
        <Link to="/">Worthy Work</Link>
      </BrowserRouter>
    </h1>
    <div className={styles.credit}>
      Powered by
      <a href="https://reliefweb.int/" target="_blank">
        <div className={styles['rw-logo']} />
      </a>
    </div>
  </nav>
);

export default Navbar;
