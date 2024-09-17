import {useState} from 'react'
import {education, experience} from './experience-item'
import Styles from './experience.module.css'

const Experience = (portoId: string) => {
  const [section,setSection] = useState(true)
  const [active1,setActive1] = useState(Styles.active)
  const [active2,setActive2] = useState(Styles.passive)

const showEdu = () => {
  setSection(true);
  setActive1(Styles.active);
  setActive2(Styles.passive);
};

const showExp = () => {
  setSection(false);
  setActive2(Styles.active);
  setActive1(Styles.passive);
};



  return (
    <div id={portoId} className={Styles['experience-container']}>
      <h1>My Experience</h1>
      <div className={Styles['experience-phone-button']}>
        <button className={active1} onClick={showEdu}>Education</button>
        <button className={active2} onClick={showExp}>Experience</button>
      </div>
      <div className={Styles['experience-content']}>
          <div className={Styles.education}>
            <h2 className={Styles['title-section']}>Education</h2>
            
              {education.map((item)=>(
                <div key={item.title} className={Styles['education-card']}>
                  <div className={Styles['education-info']}>
                    <h3>{item.title}</h3>
                    <h4>{item.year}</h4>
                    <p>{item.desc}</p>
                  </div>
                  <div className={Styles['education-photo']}>
                    <img  src={item.image} alt='education'/>
                  </div>
                </div>
              ))}
          </div>
          <div className={Styles.experience}>
            <h2 className={Styles['title-section']}>Experience</h2>
            {experience.map((item)=>(
              <div key={item.title} className={Styles['education-card']}>
                  <div className={Styles['education-info']}>
                    <h3>{item.title}</h3>
                    <h4>{item.places}</h4>
                    <h4>{item.year}</h4>
                    <p>{item.desc}</p>
                  </div>
                  <div className={Styles['education-photo']}>
                    <img  src={item.image} alt='education'/>
                  </div>
                </div>
            ))}
          </div>
      </div>

      <div className={Styles['experience-content-phone']}>
          {
            section ? 
            <div className='education-phone'>
              {education.map((item)=>(
                <div key={item.title} className={Styles['education-card']}>
                  <div className={Styles['education-info']}>
                    <h3>{item.title}</h3>
                    <h4>{item.year}</h4>
                    <p>{item.desc}</p>
                  </div>
                  <div className={Styles['education-photo']}>
                    <img  src={item.image} alt='education'/>
                  </div>
                </div>
              ))}
          </div>
          :
          <div className='experience-phone'>
            {experience.map((item)=>(
              <div key={item.title} className={Styles['education-card']}>
                  <div className={Styles['education-info']}>
                    <h3>{item.title}</h3>
                    <h4>{item.places}</h4>
                    <h4>{item.year}</h4>
                    <p>{item.desc}</p>
                  </div>
                  <div className={Styles['education-photo']}>
                    <img  src={item.image} alt='education'/>
                  </div>
                </div>
            ))}
          </div>
          }
      </div>
    </div>
  )
}

export default Experience