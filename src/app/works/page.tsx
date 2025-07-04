// src/app/works/page.tsx
import Link from 'next/link';
export default function WorksPage() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">制作物</h1>
      {/* 制作物一覧のコンテンツをここに追加 */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 各制作物のカードの例 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-2">作品タイトル1</h2>
          <p className="text-gray-600 mb-4">この作品の説明文です。</p>
          <img src="/placeholder.png" alt="作品1" className="w-full h-48 object-cover rounded-md mb-4" />
          <Link href="/works/work-1" className="text-blue-500 hover:underline">詳細を見る</Link>
        </div>
        {/* 他の作品カードも同様に追加 */}
      </section>
    </main>
  );
}