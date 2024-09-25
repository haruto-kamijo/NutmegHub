import "@/app/Styles/globals.css"
import styles from "@/app/Styles/timeline.module.css";
import Header from "@/app/components/header";
import PostModal from "@/app/components/postModal";
import {PrismaClient} from "@prisma/client";


export default async function Page() {
    // Postテーブルから全てデータを取得
    const prisma = new PrismaClient();
    const posts = prisma.posted.findMany();
    return (
        <div>
            <Header></Header>
            <main className={styles.page}>
                <h1 className="font-bold text-2xl">Timeline</h1>
                {/* Postテーブルの結果の一覧を画面に出力する */}
                {(await posts).map((post, index) => (
                    <div key={post.id} className="bg-gray-800 m-2 w-[300px]">
                        <p>id: {post.id}</p>
                        <p>name: {post.userId}</p>
                        <p>image: {post.imageUrl}</p>
                        <p>position: {post.position}</p>
                        <p>description: {post.description}</p>
                    </div>
                ))}
                <PostModal buttonLabel="+"/>
            </main>
        </div>
    )
        ;
}
