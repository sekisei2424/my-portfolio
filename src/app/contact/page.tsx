// src/app/contact/page.tsx
import { EnvelopeIcon } from '@heroicons/react/24/solid'; // メールアイコン (任意)
import { SocialIcon } from 'react-social-icons'; // ソーシャルアイコンライブラリを後で使う例

export default function ContactPage() {
  return (
    <main className="container mx-auto p-8 min-h-screen"> {/* min-h-screenを追加して、コンテンツが少ないときにフッターが下に来るように調整 */}
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">お問い合わせ</h1>
      <section className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
        <p className="text-lg text-center mb-6 text-gray-700">
          ご興味をお持ちいただきありがとうございます。お気軽にご連絡ください。
        </p>

        {/* メールアドレスのセクション */}
        <div className="text-center mb-8">
          <a
            href="mailto:your.email@example.com" // あなたのメールアドレスに置き換えてください
            className="inline-flex items-center text-blue-600 hover:text-blue-800 text-xl font-semibold transition duration-300"
          >
            <EnvelopeIcon className="h-6 w-6 mr-2" /> {/* Heroiconsのメールアイコン */}
            your.email@example.com
          </a>
        </div>

        {/* SNSリンクのセクション */}
        <div className="flex justify-center space-x-6">
          {/* GitHub */}
          <a
            href="https://github.com/your-github-username" // あなたのGitHubユーザー名に置き換えてください
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-500 transition duration-300"
            aria-label="GitHub"
          >
            {/* ここにGitHubアイコンを配置します。今回は簡略化のため、テキスト表示にします。 */}
            {/* Heroiconsには直接のGitHubアイコンはありません。 */}
            {/* より多くのSNSアイコンが必要なら「react-social-icons」や「react-icons」を検討 */}
            <span className="text-4xl">GitHub</span> {/* 大きく表示したい場合は、`SocialIcon` ライブラリの導入がおすすめです */}
          </a>

          {/* X (旧Twitter) */}
          <a
            href="https://x.com/your-x-username" // あなたのX (Twitter) ユーザー名に置き換えてください
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-500 transition duration-300"
            aria-label="X (Twitter)"
          >
            <span className="text-4xl">X</span>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/channel/YOUR_YOUTUBE_CHANNEL_ID" // あなたのYouTubeチャンネルIDまたはユーザーURLに置き換えてください
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-red-600 transition duration-300"
            aria-label="YouTube"
          >
            <span className="text-4xl">YouTube</span>
          </a>
        </div>

        {/* お問い合わせフォームは後で実装 */}
        {/*
        <form className="mt-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">名前</label>
            <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">メールアドレス</label>
            <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">メッセージ</label>
            <textarea id="message" name="message" rows={5} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              送信
            </button>
          </div>
        </form>
        */}
      </section>
    </main>
  );
}