import {MdEmail, MdWhatsapp} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import Image from '../../assets'
import styles from './contact.module.css'

const About = (aboutId: string) => {
  const contact = [
    {
      id: 1,
      name: 'WhatsApp',
      icon: <MdWhatsapp />,
      link: 'https://wa.me/6285156141278'
    },
    {
      id: 2,
      name: 'Email',
      icon : <MdEmail />,
      link: 'mailto:ervanjovian@gmail.com'
    },
    {
      id: 3,
      name: 'LinkedIn',
      icon:  <AiOutlineLinkedin />,
      link: 'https://linkedin.com/in/ervanjovian'
    }
  ]


  return (
    <div id={aboutId} className={styles['about-container']}>
      <div className={styles['about-photo']}>
        <img className={styles['about-avatar']} src={Image.myPhoto} alt='Profile' />
      </div>
      <div className={styles['about-me']}>
        <section className={styles['about-text']}>
          <h1>My Story...</h1>
          <p>Hello, I'm a Bandung-based Frontend Developer with a passion for crafting beautiful and interactive user interfaces using React Native, React, and Next. I thrive in collaborative environments and constantly seek out new challenges to expand my skillset. My curiosity about the world fuels my desire to learn and innovate🌍.</p>
        </section>
        <section className={styles['contact-me']}>
          <h1>Contact Me...</h1>
          <div className={styles['contact-container']}>
            {
              contact.map((item) =>(
                <a href={item.link} key={item.id}>
                  <span>{item.icon}</span>
                  <h3>{item.name}</h3>
                </a>
              ))
            }
          </div>
        </section>
      </div>
    </div>
  )
}

export default About