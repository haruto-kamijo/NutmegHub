import "@/app/Styles/globals.css"
import styles from "@/app/Styles/timeline.module.css";
import Header from "@/app/components/header";
import PostModal from "@/app/components/postModal";

export default function Page() {
    return (
        <div>
            <Header title={"NUTMEG HUB"}></Header>
            <main className={styles.page}>
                <h1>Timeline</h1>
                <PostModal buttonLabel="+" />
            </main>
        </div>
    );
}
