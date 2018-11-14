import React from 'react';
import styles from './Home.scss'
import {numbers} from '@App/numbers'

const Home = () => (
  <div>
    <h1 className={styles.Home}>Home ._.)/</h1>
    {console.log(numbers)}
  </div>
)

export default Home;