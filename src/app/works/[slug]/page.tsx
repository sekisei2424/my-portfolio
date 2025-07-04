// src/app/works/[slug]/page.tsx
import Link from 'next/link';
export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  // params.slug を使って、その作品の詳細データを取得・表示します
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">作品: {params.slug}</h1>
      {/* ここに作品の詳細コンテンツ（大きな画像、動画など）を追加 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-3xl font-semibold mb-4">素晴らしい作品の詳細</h2>
        {/* 画像例 */}
        <img src="/placeholder-large.png" alt="詳細画像" className="w-full object-cover rounded-md mb-4" />
        {/* 動画例 (YouTube埋め込み) */}
        <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-md"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // YOUR_VIDEO_ID を実際のYouTube動画IDに置き換え
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video player"
          ></iframe>
        </div>
        <p className="mt-4 text-gray-700">
          この作品は、[プロジェクトの目的]のために作成されました。[あなたの役割]として、[具体的な貢献]を行いました。
          [使用技術]を活用し、[苦労した点]を[解決方法]で乗り越えました。
        </p>
        {/* さらに詳細な内容や画像などを追加 */}
      </div>
      <Link href="/works" className="text-blue-500 hover:underline">← 制作物一覧に戻る</Link>
    </main>
  );
}