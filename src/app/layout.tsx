// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link'; // Linkコンポーネントをインポート

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'あなたの名前のポートフォリオ',
  description: 'あなたのデザイン/開発ポートフォリオサイト',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {/* ナビゲーションバー */}
        <header className="bg-gray-800 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              あなたの名前
            </Link>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:text-blue-400">トップ</Link></li>
              <li><Link href="/works" className="hover:text-blue-400">制作物</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400">お問い合わせ</Link></li>
            </ul>
          </nav>
        </header>

        {/* 各ページの内容がここにレンダリングされます */}
        {children}

        {/* フッター */}
        <footer className="bg-gray-800 text-white p-4 text-center mt-8">
          <div className="container mx-auto">
            <p>&copy; {new Date().getFullYear()} あなたの名前. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}