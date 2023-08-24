import styles from "./productcard.module.css";
import Image from "next/image";

export default function ProductCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardimg}>
        <Image
          src={"/img/Mo.png"}
          alt="pfizer"
          fill={true}
          objectFit="cover"
        ></Image>
      </div>
    </div>
  );
}
