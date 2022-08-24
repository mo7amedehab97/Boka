import styles from '../../styles/Navbar.module.css'
import Image from 'next/image'

const SeconedNavbar = () => {
  return (
    <div className={styles.seconed_container}>
      <div>
        <Image src="/Logo.svg" width={129.7} alt="" height={36} />
      </div>
      <div className={styles.auth_buttons}>
        <button>sign up</button>
        <button>log in</button>
      </div>
         <div className={styles.burger_menu}>
   <span></span><span></span><span></span>
      </div>
    </div>
  )
}

export default SeconedNavbar
