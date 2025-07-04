// src/app/page.tsx
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4 text-blue-600">
        私のポートフォリオサイト
      </h1>
      <p className="text-xl mb-8">
        フロントエンド開発者の[あなたの名前]です。
      </p>
      <div className="flex space-x-4">
        <a 
          href="/about" 
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          自己紹介
        </a>
        <a 
          href="/projects" 
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
        >
          プロジェクト
        </a>
      </div>
    </main>
  );
}