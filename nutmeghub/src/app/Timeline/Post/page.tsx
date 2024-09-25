import styles from "@/app/Styles/post.module.css";
import Header from "@/app/components/Header";

export default function Page() {
    return (
        <div className={styles.page}>
            <Header></Header>
            <main className={styles.main}>
                <h1>NUTMEG HUB</h1>
            </main>
        </div>
    );
}
