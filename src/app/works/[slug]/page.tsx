// src/app/works/[slug]/page.tsx
// このファイルは、各制作物の詳細ページを動的に表示するためのものです。

import Link from 'next/link'; // ページ間を移動するためのNext.jsのLinkコンポーネントをインポート
import Image from 'next/image'; // 画像最適化のためのNext.jsのImageコンポーネントをインポート

// Next.jsのApp Routerのページコンポーネントが受け取るプロップスの標準的な型を定義します。
// これには params と searchParams の両方が含まれます。
// これにより、Next.jsの内部的な PageProps の型制約を確実に満たします。
type WorkDetailPageProps = {
  params: { slug: string }; // URLの [slug] の部分
  searchParams?: { [key: string]: string | string[] | undefined }; // URLのクエリパラメータ（例: ?key=value）
};

// WorkDetailPage コンポーネントの定義
// async 関数として定義することで、Next.jsのサーバーコンポーネントとしての型推論と合致させます。
export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  // params.slug の値は、アクセスされたURLの [slug] の部分になります。
  // 例: /works/my-first-design にアクセスした場合、params.slug は "my-first-design" となります。
  // 実際には、このslugを使って、データベースやAPIから該当する作品の詳細データを非同期で取得します。
  // 例: const workData = await fetch(`/api/works/${params.slug}`).then(res => res.json());

  return (
    // main要素でページの主要コンテンツを囲みます。
    // Tailwind CSSのクラスを使って、コンテナの幅、パディング、最小の高さを設定し、中央に配置します。
    <main className="container mx-auto p-8 min-h-screen">
      {/* ページタイトル: 現在の作品のslugを表示 */}
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">作品: {params.slug}</h1>

      {/* 作品の詳細コンテンツを表示するセクション */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8 max-w-3xl mx-auto">
        {/* 作品のサブタイトルや具体的な説明の導入 */}
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">素晴らしい作品の詳細</h2>

        {/* 作品のメイン画像を表示するセクション */}
        {/* <img>タグを<Image>コンポーネントに置き換えます。 */}
        {/* Next.jsのImageコンポーネントは、widthとheightプロパティが必須です。 */}
        {/* layout="responsive" は非推奨になったため、fillやサイズ指定のclassを使用します。 */}
        {/* ここでは固定のサイズ例としてwidthとheightを指定します。実際の画像サイズに合わせて調整してください。 */}
        <div className="relative w-full h-96 mb-4 rounded-md overflow-hidden"> {/* 画像を囲むコンテナ */}
          <Image
            src="/placeholder-large.png" // あなたの作品の画像URLに置き換えてください
            alt="詳細画像"
            fill // 親要素のサイズに合わせて画像を埋める
            style={{ objectFit: 'cover' }} // 画像がコンテナに収まるように調整
            priority // LCP（Largest Contentful Paint）改善のため、優先的に読み込む
            className="rounded-md" // 角丸を適用
          />
        </div>


        {/* YouTube動画の埋め込みセクション */}
        {/* 'relative' と 'paddingBottom' を使って、動画のアスペクト比を維持します。 */}
        <div className="relative mb-4" style={{ paddingBottom: '56.25%', height: 0 }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-md"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // ここを実際のYouTube動画IDに置き換えてください
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