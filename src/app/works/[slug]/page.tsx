import Link from 'next/link';
export default function WorkDetailPage({ params }: { params: { slug: string } }) {

  return (
    <main className="container mx-auto p-8 min-h-screen">
      {/* ページタイトル: 現在の作品のslugを表示 */}
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">作品: {params.slug}</h1>

      {/* 作品の詳細コンテンツを表示するセクション */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8 max-w-3xl mx-auto">
        {/* 作品のサブタイトルや具体的な説明の導入 */}
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">素晴らしい作品の詳細</h2>

        {/* 作品のメイン画像を表示するセクション */}
        {/* 'src' は仮のプレースホルダー画像です。実際にはあなたの作品の画像URLに置き換えてください。 */}
        {/* Tailwind CSSで画像の幅、高さ、オブジェクトフィット、角丸を設定します。 */}
        <img
          src="/placeholder-large.png" // あなたの作品の画像URLに置き換えてください
          alt="詳細画像"
          className="w-full object-cover rounded-md mb-4"
          // Next.jsのImageコンポーネントを使用すると、画像最適化が自動で行われます。
          // その場合は、width, height, priorityなどのプロパティが必要になります。
          // 例: <Image src="/your-work-image.jpg" alt="詳細画像" width={800} height={450} layout="responsive" className="rounded-md mb-4" />
        />

        {/* YouTube動画の埋め込みセクション */}
        {/* 'relative' と 'paddingBottom' を使って、動画のアスペクト比を維持します。 */}
        <div className="relative mb-4" style={{ paddingBottom: '56.25%', height: 0 }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-md"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // ここを実際のYouTube動画IDに置き換えてください
            // 'allow' 属性は、埋め込みコンテンツが特定の機能を実行することを許可します。
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen // フルスクリーン表示を許可
            title="YouTube video player" // アクセシビリティのためのタイトル
          ></iframe>
        </div>

        {/* 作品の説明テキスト */}
        <p className="mt-4 text-gray-700 leading-relaxed">
          この作品は、[プロジェクトの目的]のために作成されました。[あなたの役割]として、[具体的な貢献]を行いました。
          [使用技術]を活用し、[苦労した点]を[解決方法]で乗り越えました。
          ここに、デザインの思考プロセス、ワイヤーフレーム、プロトタイプ、ユーザーテストの結果など、
          より詳細な情報を追加できます。
        </p>

        {/* さらに詳細な内容や画像などをここに追加できます */}
      </div>

      {/* 制作物一覧ページに戻るリンク */}
      <div className="text-center mt-8">
        <Link href="/works" className="text-blue-500 hover:underline text-lg font-medium transition duration-300">
          ← 制作物一覧に戻る
        </Link>
      </div>
    </main>
  );
}

// --- 補足：generateStaticParams について ---
// もし、この詳細ページをビルド時に静的に生成したい場合（SSG）は、
// 以下の generateStaticParams 関数をエクスポートします。
// これにより、Next.jsはビルド時にどのslugでページを生成すべきかを知ることができます。
// export async function generateStaticParams() {
//   // 例: 実際には、APIやファイルから全ての作品のslugリストを取得します。
//   const allWorkSlugs = [
//     'sample-design-project-1',
//     'web-application-showcase',
//     'branding-identity-case-study',
//     // ... 他の作品のslugを追加
//   ];

//   return allWorkSlugs.map(slug => ({
//     slug: slug,
//   }));
// }