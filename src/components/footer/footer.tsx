import React from 'react'
import {FaReact,FaGithub} from 'react-icons/fa'
import {TbBrandReact, TbBrandVite} from 'react-icons/tb'
import styles from './footer.module.css'

const Footer = (): React.ReactElement => {
  return (
    <footer className={styles.footer}>
      <h5>Created by Ervan Jovian</h5>
      <p>Created with:</p>
      <section className={styles['footer-logos']}>
        <a target='_blank' href='https://react.dev/' rel="noreferrer"><FaReact/></a>
        <a target='_blank' href='https://github.com/' rel="noreferrer"><FaGithub/></a>
        <a target='_blank' href='https://vitejs.dev/' rel="noreferrer"><TbBrandVite/></a>
        <a target='_blank' href='https://react-icons.github.io/react-icons/' rel="noreferrer"><TbBrandReact/></a>
      </section>
    </footer>
  )
}

export default Footer