import { useRef } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import styles from './navigation.module.css'

interface NavbarProps {
  home: string
  about: string
  porto: string
  certif: string
}

const Navbar = ({home, about, porto, certif}: NavbarProps) => {
  const navRef = useRef<HTMLElement | null>(null)

  const showNavBar = () =>{
    navRef?.current?.classList.toggle(styles['responsive-nav'])
  }

  return (
    <header className={styles['navbar-container']}>
      <h1>Ervan.</h1>
      <nav ref={navRef}>
        <a className={styles['link-nav']} onClick={showNavBar} href={`#${home}`}>About Me</a>
        <a className={styles['link-nav']} onClick={showNavBar} href={`#${about}`}>Contact</a>
        <a className={styles['link-nav']} onClick={showNavBar} href={`#${porto}`}>Timeline</a>
        <a className={styles['link-nav']} onClick={showNavBar} href={`#${certif}`}>Certifcation</a>
        <button className={`${styles['nav-btn']} ${styles['nav-close-btn']}`} onClick={showNavBar}>
          <FaTimes className={styles['nav-icon']}/>
        </button>
      </nav>
      <button className={styles['nav-btn']} onClick={showNavBar}>
        <FaBars className={styles['nav-icon']}/>
      </button>
    </header>
  )
}

export default Navbar