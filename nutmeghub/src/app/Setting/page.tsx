import styles from "@/app/Styles/setting.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <h1>NUTMEG HUB</h1>
          <button>get started</button>
          <button>login</button>
      </main>
    </div>
  );
}
