import styles from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Dj Events 2022</p>
      <p>
        <Link href="/about">
          <a>About This Project</a>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
