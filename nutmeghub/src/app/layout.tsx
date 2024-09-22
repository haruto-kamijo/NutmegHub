import styles from './Styles/home.module.css';
import AuthProvider from '@/app/provider/NextAuth';

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="ja">
      <body className={styles.page}>
      <AuthProvider>{children}</AuthProvider>
      </body>
      </html>
  );
}
