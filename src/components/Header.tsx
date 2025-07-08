import Link from 'next/link'; // Linkコンポーネントを忘れずにインポート

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          セキセイ
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-blue-400">トップ</Link></li>
          <li><Link href="/works" className="hover:text-blue-400">制作物</Link></li>
          <li><Link href="/contact" className="hover:text-blue-400">お問い合わせ</Link></li>
        </ul>
      </nav>
    </header>
  );
}