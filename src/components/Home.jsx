import React from 'react';
import styles from './Home.scss'
import Header from '../shared/components/Heade'

const Home = () => (
  <div>
    <Header />
    <h1 className={styles.Home}>Home</h1>
  </div>
)
export default Home;