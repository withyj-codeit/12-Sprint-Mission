import Link from "next/link"
import styles from "./ButtonList.module.css";

export const ButtonList = () => {
  return (
    <div className={styles.buttonList}>
      {Array.from({ length: 5 }, (_, i) => (
        <Link
          key={i}
          href={`./${i + 1}`}
          scroll={false}
        >
          {i + 1}
        </Link>
      ))}
    </div>
  )
}
