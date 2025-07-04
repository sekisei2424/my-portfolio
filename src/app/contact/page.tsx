// src/app/contact/page.tsx
export default function ContactPage() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">お問い合わせ</h1>
      <section className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
        <p className="text-lg text-center mb-6">
          ご興味をお持ちいただきありがとうございます。お気軽にご連絡ください。
        </p>
        <div className="text-center mb-6">
          <a href="mailto:your.email@example.com" className="text-blue-500 hover:underline text-xl font-semibold">
            your.email@example.com
          </a>
        </div>
        <div className="flex justify-center space-x-6">
          {/* GitHubやSNSアイコンをここに追加 */}
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500">
            {/* ここにGitHubアイコンコンポーネントを配置 */}
            GitHub
          </a>
          <a href="https://x.com/your-twitter" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500">
            {/* ここにXアイコンコンポーネントを配置 */}
            X/Twitter
          </a>
        </div>
        {/* お問い合わせフォーム（後で実装） */}
        {/* <form className="mt-8">
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
        </form> */}
      </section>
    </main>
  );
}