import  {motion} from 'framer-motion'
import React from 'react'
import { IoDocumentText } from "react-icons/io5";

import Image from '../../assets'
import styles from './about.module.css'


const Home = (homeId: string): React.ReactElement => {
  const dev = "Frontend Developer </>"
  return (
    <div id={homeId} className={styles['home-container']}>
      <img src={Image.avatar} alt="Avatar Icon"/>
      <h1>Ervan Jovian</h1>
      <h2>{dev}</h2>
      <br/>
      <p className={styles['about-text']}>Designing the future isn't magic, it's a symphony of algorithms, composed with dedication and boundless imagination🌟</p>
      <br/>
      <motion.a 
      className={styles['motion-container']}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      target='_blank' href='https://drive.google.com/file/d/1AHsmmWgSqMW-AGqBhgvsViIY4gSU784y/view?usp=drive_link' rel="noreferrer">
      <p className={styles['text-button']}>Download CV </p>
      <IoDocumentText aria-hidden={true} className={styles.buttonIcon}/>
      </motion.a>
    </div>
  )
}

export default Home