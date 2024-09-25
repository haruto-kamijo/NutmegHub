import AuthProvider from "@/app/provider/NextAuth";
import Login from "@/app/components/Login";
import Link from "next/link"
import styles from './Styles/home.module.css';

const Home = () => {
    return (
        <AuthProvider>
            <div className={styles.container}>
                <div className={styles.img_container}>
                <img src="/nutfes.svg" />
                <img src="/いぬ.svg" />
                </div>
                <div className={styles.button_container}>
                <Link href="./Timeline"><button className={styles.button}>get started</button></Link>
                <Login/>
                </div>
            </div>
        </AuthProvider>
    );
};

export default Home;