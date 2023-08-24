import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner() {
    return (
       
            <div className={styles.banner}>
                <Image src={"/img/coverHomePage.jpg"} alt="cover" fill={true} objectFit="cover" />
                <div className={styles.bannerText}>
                    <h1>Vaccine</h1>
                    <h3>Choose your appointment</h3>
                </div>
            </div>
        )
}