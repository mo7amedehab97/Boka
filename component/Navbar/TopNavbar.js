import { useState } from 'react'
import styles from '../../styles/Navbar.module.css'
import Image from 'next/image'
const r = ['EN', 'ES', 'FR']
const TopNavbar = () => {
  const [showLanguage, setShowLanguage] = useState(false)
  const [language, setLanguage] = useState('EN')
  return (
    <div className={styles.container}>
      <div className={styles.social_icons}>
        <Image src="/Instagram.svg" width={18} alt="" height={18} />
        <Image src="/Youtube.svg" width={18} alt="" height={18} />
        <Image src="/Facebook.svg" width={18} alt="" height={18} />
        <div>
          <Image src="/Phone.svg" width={18} alt="" height={18} />
          <span>+1 985 983 9823 </span>
        </div>
      </div>
      <div className={styles.details}>
        <p>For Business</p>
        <p>Help</p>
        <div className={styles.language_list}>
          <span onClick={() => setShowLanguage(!showLanguage)}>
            {' '}
            {language}{' '}
          </span>
          <Image
            src="/Arrow.svg"
            width={11}
            alt=""
            height={10}
            onClick={() => setShowLanguage(!showLanguage)}
          />
          <ul className={showLanguage ? styles.show : styles.hide}>
            {r.map((r, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    setLanguage(r)
                    setShowLanguage(!showLanguage)
                  }}
                >
                  {r}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TopNavbar
