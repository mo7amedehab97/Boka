import { useState } from 'react'
import styles from '../../styles/Navbar.module.css'
import Image from 'next/image'
const TopNavbar = () => {
  const [showLanguage, setShowLanguage] = useState(false)
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
        <div>
          <span> EN </span>
          <Image
            src="/Arrow.svg"
            width={11}
            alt=""
            height={10}
            onClick={() => setShowLanguage(!showLanguage)}
          />
          <ul className={showLanguage ? styles.show : styles.hide}>
            <li>EN</li>
            <li>ES</li>
            <li>FR</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TopNavbar
