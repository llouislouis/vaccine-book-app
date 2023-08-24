import styles from "./productcard.module.css";
import Image from "next/image";

export default function ProductCard() {
  return (
    <div>
      {/* Banner Component */}
      <div className={styles.banner}>
        {/* ส่วนของโค้ดสำหรับ Banner ที่คุณได้ทำไว้ */}
      </div>

      {/* Card Component */}
      <div className={styles.card}>
        <div className={styles.cardimg}>
          <Image
            src={"/img/Mo.png"}
            alt="pfizer"
            fill={true}
            objectFit="cover"
          />
        </div>
        <div className={styles.cardcontent}>
          <h2>
            วัคซีนโมเดอร์นา
            <br /> ควรฉีดกี่เข็ม
          </h2>
          <p>
            วัคซีนโมเดอร์นาควรฉีดทั้งหมด 2 เข็ม โดยเข็มที่ 2
            เว้นห่างจากเข็มแรกประมาณ 28 วัน หรือ 4 สัปดาห์
            ขึ้นอยู่กับแพทย์ประเมิน
          </p>
        </div>
      </div>
    </div>
  );
}
