import styles from './Styles/home.module.css';
import AuthProvider from '@/app/provider/NextAuth';
import "@/app/Styles/globals.css"

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="ja" className="default">
      <body className={styles.page}>
      <AuthProvider>{children}</AuthProvider>
      </body>
      </html>
  );
}
