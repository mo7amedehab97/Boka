import React from 'react';
import styles from '../../styles/Footer.module.css'
import Link from 'next/link'



function FooterUl({ header, data }) {
    return (

        <div className={styles.footer_ul}>
            <h4 className={styles.ul_header}>{header}</h4>
            <ul>
                {data.map((value, index) => (
                    <li key={index}>
                        <Link href={`/${value}`}>
                            <a>{value}</a>
                        </Link>
                    </li>

                ))}
            </ul>
        </div>
    );
}

export default FooterUl