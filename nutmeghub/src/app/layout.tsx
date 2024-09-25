import AuthProvider from '@/app/provider/NextAuth';
import "@/app/Styles/globals.css"
import "@/app/Styles/reset.css"

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="ja">
        <body className="default">
          <AuthProvider>{children}</AuthProvider>
        </body>
      </html>
  );
}
