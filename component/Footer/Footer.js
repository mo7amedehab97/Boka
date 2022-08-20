import React from 'react'
import styles from '../../styles/Footer.module.css'
import Image from 'next/image'
import FooterUl from '../Footer/FooterUl'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_main}>
        <div className={styles.footer_section}>
          <Image src="/Logo.svg" width={129.7} alt="" height={36} />
          <p>
            Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do
            eius mod tempor incididunt.
          </p>
        </div>
        <div className={styles.footer_section}>
          <FooterUl
            header={'Discover'}
            data={[
              'Dining Rewards',
              'Rivate Dining',
              'Reserve For Others',
              'cuisines Near Me',
              ' Rsturants Near Me',
              'Delivary Near Me',
              'Cuisibes Near Me',
              'Delivary Near Me',
              'Cuisines',
              'Resturnats Open Now',
            ]}
          />
        </div>
        <div className={styles.footer_section}>
          <FooterUl
            header={'Opentable'}
            data={['About Us', 'Blog', 'Careers', 'Press']}
          />
          <FooterUl
            header={'More'}
            data={[
              'OpenTable for iOS',
              'OpenTable for Android',
              'Affiliate Program',
              'Contact Us',
            ]}
          />
        </div>
        <div className={styles.footer_section}>
          <FooterUl
            header={'Our Sites'}
            data={[
              'OpenTable.jp',
              'OpenTable.de',
              'OpenTable.es',
              'OpenTable.ca',
              'OpenTable.hk',
              'OpenTable.ie',
              'OpenTable.sg',
              'OpenTable.nl',
              'OpenTable.com.mx',
              'OpenTable.co.uk',
            ]}
          />
        </div>
        <div className={styles.footer_section}>
          <FooterUl
            header={'Businesses'}
            data={['Delight more diners', 'Open for Busuness Blog']}
          />
          <h4>Join Us ON</h4>
          <div className={styles.social_containter}>
            <div>
              <Image
                src="/Instagram.svg"
                width={16}
                alt=""
                height={16}
                color={'#a4c1c8'}
              />
            </div>
            <div>
              <Image src="/Twitter.svg" width={16} alt="" height={16} />
            </div>
            <div>
              <Image src="/Linkedin.svg" width={16} alt="" height={16} />
            </div>
            <div>
              <Image src="/Facebook.svg" width={16} alt="" height={16} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_licenseing}>
        <ul>
          <li>Privacy Policy</li>

          <li>Terms of Use</li>

          <li>Cookies and Intrest-Based Ads</li>

          <li>Do Not Sell</li>

          <li>Cookies Settings</li>

          <li>Copyright © 2022 Boka, Inc. All rights reserved.</li>
        </ul>
      </div>
      <div className={styles.footer_booking}>
        <p>
          OpenTable is part of Booking Holdings, the world leader in online
          travel and related services.
        </p>
        <Image
          src="/Payment-Cards.svg"
          width="222"
          height="34"
          alt="payment-cards-img"
        />
      </div>
    </div>
  )
}

export default Footer
