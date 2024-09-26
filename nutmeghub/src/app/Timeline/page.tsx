import "@/app/Styles/globals.css"
import styles from "@/app/Styles/timeline.module.css";
// @ts-ignore
import Header from "@/app/components/header";
import PostModal from "@/app/components/postModal";
import {PrismaClient} from "@prisma/client";

export default async function Page() {
    // Postテーブルから全てデータを取得
    const prisma = new PrismaClient();
    const posts = prisma.posted.findMany();
    return (
            <div className={styles.background}>
            <Header></Header>
            <div className={styles.tab}>
                <div className={styles.tabcontents}><p className={styles.ptabcontents}>模擬店</p></div>
                <div className={styles.tabcontents}><p className={styles.ptabcontents}>イベント</p></div>
                <div className={styles.tabcontents}><p className={styles.ptabcontents}>展示体験・企業ブース</p></div>
            </div>
            <main className={styles.postbox}>
                {/* <h1 className={styles.timeline}>Timeline</h1> */}
                {/* Postテーブルの結果の一覧を画面に出力する */}
                {(await posts).map((post, index) => (
                    <div key={post.id}>
                        <p className={styles.posthiddein}>name: {post.userId}</p>
                        <div className={styles.locationBox}>
                            <img src="/pointicon.png" alt="locationImg" className={styles.imgsize}/>
                            <p>position: {post.position}</p>
                        </div>
                        <img src={post.imageUrl} alt="投稿された画像です"></img>
                        <p>{post.description}</p>
                    </div>
                ))}
                <PostModal buttonLabel="+" />
            </main>
            </div>
    )
        ;
}