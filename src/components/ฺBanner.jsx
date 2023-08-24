import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner() {
    return (
       
            <div className={styles.banner}>
                <Image src={"/img/coverHomePage.jpg"} alt="cover" fill={true} objectFit="cover" />
                <div className={styles.bannerText}>
                <h1>Welcome to Our Vaccination Center</h1>
                <h2>Choose Your Vaccination Appointment</h2>
                </div>
            </div>
        )
}